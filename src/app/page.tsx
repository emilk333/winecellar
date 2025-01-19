import Image from "next/image"
import Table from "./components/table/Table"
import { transformWinesIntoStructuralData } from "./dataTransform/dataTransform"
import React, { Suspense } from "react"
import Search from "./components/input/Search"
import { createClient } from '@/app/util/supabase/server';


const renderAppelationSections = (wineByAppelation: any) => {
	return (
		<section className="pb-20">
			<h3 className="capitalize text-center text-lg font-bold">
				{wineByAppelation.appelation}
			</h3>
			{wineByAppelation.wines.map((wine: any, index: number) => (
				<Suspense key={index}>
					<Table row={wine} key={index} />
				</Suspense>
			))}
		</section>
	)
}

const renderCountrySections = (wineByCountry: any) => {
	return (
		<section>
			<h2 className="capitalize text-center text-2xl font-bold">
				{wineByCountry.country}
			</h2>
			{wineByCountry.wines.map((wineByCountry: any, index: number) => {
				return (
					<React.Fragment key={index}>
						{renderAppelationSections(wineByCountry)}
					</React.Fragment>
				)
			})}
		</section>
	)
}

const renderTypeSections = (row: any, parentIndexKey: number) => {
	return (
		<section key={parentIndexKey}>
			<h1 className="capitalize text-center text-4xl font-bold">
				{row.type}
			</h1>
			{row.wines.map((wineByCountry: any, index: number) => {
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

	const supabase = await createClient()
    const { data: wines, error } = await supabase.from("wines").select()

	if (error) return <div>Implement error handling pls</div>

	const transformedData = transformWinesIntoStructuralData(wines, query)

	return (
		<div className="items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full ">
				<Search placeholder={"search..."} />
				<div className="flex items-center justify-center">
					<div className="w-full max-w-3xl block">
						{transformedData.map((row: any, index: number) =>
							renderTypeSections(row, index)
						)}
					</div>
				</div>
			</main>
		</div>
	)
}
