import {
	AppelationWine,
	CountryWine,
	transformWinesIntoStructuralData,
} from "./dataTransform/dataTransform"
import React, { Suspense } from "react"
import Search from "./components/input/Search"
import AddWine from "./features/AddWine"
import { getAllWine } from "./queries/wines"
import { TypeWine } from "./dataTransform/dataTransform"
import { Wine, WineType } from "@/types/schema"
import { TableRowWithDelete } from "./components/table/TableRowWithDelete"
import { oldLondonFont } from "./util/font/fonts"

const getColorByType = (type: WineType) => {
	switch(type) { 
		case WineType.White: { 
			return "before:bg-piss-yellow after:bg-piss-yellow"; 
		} 
		case WineType.Red: { 
			return "before:bg-off-red after:bg-off-red"; 
		} 
		case WineType.Rosé: { 
			return "before:bg-rosé after:bg-piss-yellow"; 
		} 
		case WineType.Orange: { 
			return "before:bg-orange after:bg-piss-yellow"; 
		} 
		case WineType.Sweet: { 
			return "before:bg-off-yellow after:bg-piss-yellow"; 
		} 
		case WineType.Port: { 
			return "before:bg-port after:bg-piss-yellow"; 
		} 
		default: { 
			return "unknown"; 
		} 
	} 
}

const renderAppelationSections = (wineByAppelation: AppelationWine) => {
	return (
		<section className="pb-6">
			<h3 className={`font-old-london ${oldLondonFont.variable} capitalize text-xl`}>
				{wineByAppelation.appelation}
			</h3>
			<table className="w-full">
				<caption className="sr-only"></caption>
				<thead className="sr-only"></thead>
				<tbody>
					{wineByAppelation.wines.map((wine: Wine, index: number) => (
						<Suspense key={index}>
							<TableRowWithDelete row={wine} index={wine.id}/>
						</Suspense>
					))}
				</tbody>
			</table>
		</section>
	)
}

const renderCountrySections = (wineByCountry: CountryWine, typeColor: string) => {
	return (
		<section className={`after:contet-[''] after:h-2 after:w-2 after:absolute after:top-5 after:left-[-33.5px] after:rounded-full
			relative mb-10 max-w-3xl justify-self-center w-full 
			before:content-[''] before:absolute before:left-[-30px] before:top-5 before:block before:h-[calc(100%_-_50px)] before:w-[1.5px] ${typeColor}`}>
			<h2 className={`capitalize ${oldLondonFont.variable} font-old-london text-4xl`}>
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
	const typeColor = getColorByType(row.type)
	return (
		<div key={parentIndexKey} className="relative">
			{row.wines.map((wineByCountry: CountryWine, index: number) => {
				return (
					<React.Fragment key={index}>
						{renderCountrySections(wineByCountry, typeColor)}
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default async function Home(props: {
	searchParams: Promise<{ query?: string }>
}) {
	const query = (await (await props.searchParams).query) ?? ""
	const [wines, error] = await getAllWine()

	if (error || !wines) return <div>Implement error handling pls</div>

	const transformedData = transformWinesIntoStructuralData(wines, query)

	return (
		<div className="items-center justify-items-center min-h-screen pb-20">
			<main className="w-full ">
				<Search placeholder={"search..."} />
				<div className="flex items-center justify-center">
					<div className="w-full block">
						{transformedData.map((row, index: number) =>
							renderTypeSections(row, index)
						)}
					</div>
				</div>
				<AddWine />
			</main>
		</div>
	)
}
