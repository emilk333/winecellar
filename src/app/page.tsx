import Image from "next/image"
import { AppelationWine, CountryWine, transformWinesIntoStructuralData } from "./dataTransform/dataTransform"
import React, { Suspense } from "react"
import Search from "./components/input/Search"
import AddWine from "./features/AddWine"
import { getAllWine } from "./queries/wines"
import { TypeWine } from './dataTransform/dataTransform'
import { Wine } from "@/types/schema"
import { TableRowWithDelete } from "./components/table/TableRowWithDelete"

const renderAppelationSections = (wineByAppelation: AppelationWine) => {
	return (
		<section className="pb-20">
			<h3 className="capitalize text-center text-lg font-bold">
				{wineByAppelation.appelation}
			</h3>
			<table className="w-full">
				<caption className="sr-only"></caption>
				<thead className="sr-only"></thead>
				<tbody>
					{wineByAppelation.wines.map((wine: Wine, index: number) => (
						<Suspense key={index}>
							<TableRowWithDelete row={wine} key={index} />
						</Suspense>
					))}
				</tbody>
			</table>
		</section>
	)
}

const renderCountrySections = (wineByCountry: CountryWine) => {
	return (
		<section>
			<h2 className="capitalize text-center text-2xl font-bold">
				{wineByCountry.country}
			</h2>
			{wineByCountry.wines.map((wineByCountry: AppelationWine, index: number) => {
				return (
					<React.Fragment key={index}>
						{renderAppelationSections(wineByCountry)}
					</React.Fragment>
				)
			})}
		</section>
	)
}

const renderTypeSections = (row: TypeWine, parentIndexKey: number) => {
	return (
		<section key={parentIndexKey}>
			<h1 className="capitalize text-center text-4xl font-bold">
				{row.type}
			</h1>
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
	const query = await (await props.searchParams).query ?? ""

	// const supabase = await createClient()
    // const { data: wines, error } = await supabase.from("wines").select()
	// if (error) return <div>Implement error handling pls</div>
	const wines = await getAllWine()

	const transformedData = transformWinesIntoStructuralData(wines, query)

	return (
		<div className="items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full ">
				<Search placeholder={"search..."} />
				<div className="flex items-center justify-center">
					<div className="w-full max-w-3xl block">
						{transformedData.map((row, index: number) =>
							renderTypeSections(row, index)
						)}
					</div>
				</div>
				<AddWine/>
			</main>
		</div>
	)
}
