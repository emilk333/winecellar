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
import { oldLondonFont } from "./util/font/fonts"
import { Tag } from "./components/tag/Tag"
import { getBgColorByType, getPseudoBgColorByType, getTextAccentColorByType } from "./util/color/ColorMappers"
import SubmitWineWrapper from "./features/SubmitWineWrapper"
import AddWine from "./features/AddWine"

const renderAppelationSections = (wineByAppelation: AppelationWine) => {
	return (
		<section className="pb-6">
			<h3 className={`font-old-london ${oldLondonFont.variable} capitalize text-2xl`}>
				{wineByAppelation.appelation}
			</h3>
			<table className="w-full">
				<caption className="sr-only"></caption>
				<thead className="sr-only"></thead>
				<tbody>
					{wineByAppelation.wines.map((wine: Wine, index: number) => (
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
		<section className="w-[calc(100%-0.5rem)] pb-3 text-coal-400 lg:pl-0 pl-8">
			<h2 className={`capitalize ${oldLondonFont.variable} font-old-london text-5xl pb-1`}>
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
	const typePseudoAccentColor = getPseudoBgColorByType(row.type)

	return (
		<section key={parentIndexKey} className="relative mb-10 max-w-screen-lg justify-self-center w-full h-full">
			<Tag
				color={typeBgColor}
				accentColor={typeTextAccentColor}
				pseudoColor={typePseudoAccentColor}
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
	const query = (await (await props.searchParams).query) ?? ""
	const [wines, error] = await getAllWine()
	
	if (error || !wines) return <ErrorTemplate {...error}/>

	const transformedData = transformWinesIntoStructuralData(wines, query)

	return (
		<div className="items-center justify-center min-h-screen pb-20 flex">
			<main className="lg:px-0 px-4 w-full flex items-center flex-col max-w-screen-lg">
				<div className="w-full mb-10 mt-8 flex items-center justify-center space-x-2 lg:-ml-4">
					<Search placeholder={"Search..."} />
					<SubmitWineWrapper>
						<AddWine />
					</SubmitWineWrapper>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-full block">
						{transformedData.map((row, index: number) =>
							renderTypeSections(row, index)
						)}
					</div>
				</div>
			</main>
		</div>
	)
}

