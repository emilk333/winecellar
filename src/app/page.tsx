import {
	AppelationWine,
	CountryWine,
	transformWinesIntoStructuralData,
} from "./dataTransform/dataTransform"
import React, { Suspense } from "react"
import Search from "./components/input/Search"
import { ErrorTemplate } from "./features/ErrorTemplate"
import { getAllWine } from "./queries/wines"
import { TypeWine } from "./dataTransform/dataTransform"
import { Wine } from "@/types/schema"
import { TableRowWithDelete } from "./components/table/TableRowWithDelete"
import { oldLondonFont, aleoFont } from "./util/font/fonts"
import { Tag } from "./components/tag/Tag"
import { getBgColorByType, getPseudoBgColorByTypeAfter, getPseudoBgColorByTypeBefore, getTextAccentColorByType, } from "./util/color/ColorMappers"
import SubmitWineWrapper from "./features/SubmitWineWrapper"
import AddWine from "./features/AddWine"
import { createClient } from '@/app/util/supabase/server';
import { redirect } from "next/navigation"
import { sortByWineType } from "./util/sortByWineType"
import { sortByWineProducer } from "./util/sortByWineProducer"

const renderAppelationSections = (wineByAppelation: AppelationWine) => {
	return (
		<section className={`pb-5 lg:w-full w-max`}>
			<h3 className={`capitalize font-bold text-lg font-body ${aleoFont.variable} pb-2`}>
				{wineByAppelation.appelation}
			</h3>
			<table className={`w-full font-body text-sm ${aleoFont.variable} lg:min-w-auto min-w-[800px]`}>
				<caption className="sr-only"></caption>
				<thead className="sr-only"></thead>
				<tbody>
					{sortByWineProducer(wineByAppelation.wines).map((wine: Wine, index: number) => (
						<Suspense key={index}>
							<TableRowWithDelete row={wine}/>
						</Suspense>
					))}
				</tbody>
			</table>
		</section>
	)
}

const renderCountrySections = (wineByCountry: CountryWine) => {
	return (
		<section className="overflow-x-auto overflow-y-clip relative z-10 text-coal-400 bg-paper-100 border-gray-400 border-b lg:p-10 p-4">
			<h2 className={`capitalize ${oldLondonFont.variable} font-old-london text-5xl lg:pb-1 pb-6 text-center`}>
				{wineByCountry.country}
			</h2>
			{wineByCountry.wines.map(
				(wineByCountry: AppelationWine, index: number) => {
					return (
						<React.Fragment key={index}>
							{renderAppelationSections(wineByCountry)}
						</React.Fragment>
					)
				}
			)}
		</section>
	)
}

const renderTypeSections = (row: TypeWine, parentIndexKey: number) => {
	const typeBgColor = getBgColorByType(row.type)
	const typeTextAccentColor = getTextAccentColorByType(row.type)
	const typePseudoAccentColorAfter = getPseudoBgColorByTypeAfter(row.type)
	const typePseudoAccentColorBefore = getPseudoBgColorByTypeBefore(row.type)

	return (
		<section key={parentIndexKey} className="relative mb-14 container border-gray-400 border-l-[1px] border-r-[1px] justify-self-center w-full h-full border-gray-400 border-solid border-t">
			<Tag
				color={typeBgColor}
				accentColor={typeTextAccentColor}
				pseudoColorAfter={typePseudoAccentColorAfter}
				pseudoColorBefore={typePseudoAccentColorBefore}
				data={row.type}
			/>
			{row.wines.map((wineByCountry: CountryWine, index: number) => {
				return (
					<React.Fragment key={index}>
						{renderCountrySections(wineByCountry)}
					</React.Fragment>
				)
			})}
		</section>
	)
}

export default async function Home(props: {
	searchParams: Promise<{ query?: string }>
}) {
	const supabase = await createClient()

	const { data, error: authError } = await supabase.auth.getUser()

	if (authError || !data?.user) {
		redirect('/login')
	}

	const query = (await (await props.searchParams).query) ?? ""
	const [wines, error] = await getAllWine()
	
	if (error || !wines) return <ErrorTemplate {...error}/>

	const transformedData = transformWinesIntoStructuralData(wines, query)

	return (
		<div className="justify-center min-h-screen pb-20 flex">
			<main className="lg:px-0 px-4 w-full flex items-center flex-col mb-10 mt-8 md:mx-20 mx-0">
				<div className="container w-full flex items-center relative">
					<Search placeholder={"Search..."} />
					<SubmitWineWrapper>
						<AddWine />
					</SubmitWineWrapper>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-full block">
						{sortByWineType(transformedData).map((row, index: number) =>
							renderTypeSections(row, index)
						)}
						<div className="h-20 bg-paper-100 z-10 relative"></div>
					</div>
				</div>
			</main>
		</div>
	)
}

