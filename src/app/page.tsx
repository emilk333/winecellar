import Image from "next/image";
import StaticEntryRow from "./components/wineEntryRow/page";
import { fetchWrapped } from "./util/fetch";
import { Endpoint } from "./util/endpoints";
import { transformWinesIntoStructuralData } from "./dataTransform/dataTransform";
import React from "react";

const renderAppelationSections = (wineByAppelation: any, originalIndex: number) => {
	return (
		<section className="pb-20">
			<h3 className="capitalize text-center text-lg font-bold">{wineByAppelation.appelation}</h3>
			{wineByAppelation.wines.map((wine: any) => <StaticEntryRow row={wine} key={originalIndex}/>)}
		</section>
	);
};

const renderCountrySections = (wineByCountry: any, originalIndex: number) => {
	return (
		<section>
			<h2 className="capitalize text-center text-2xl font-bold">{wineByCountry.country}</h2>
			{wineByCountry.wines.map((wineByCountry: any, index: number) => {
                return <React.Fragment key={index}>
                    {renderAppelationSections(wineByCountry, originalIndex)}
                </React.Fragment>
            })}
		</section>
	);
};

const renderTypeSections = (row: any, originalIndex: number) => {
	return (
		<section key={originalIndex}>
			<h1 className="capitalize text-center text-4xl font-bold">{row.type}</h1>
			{row.wines.map((wineByCountry: any, index: number) => {
                return <React.Fragment key={index}>
                    {renderCountrySections(wineByCountry, originalIndex)}
                </React.Fragment>
            })}
		</section>
	);
};

export default async function Home() {
	// TODO we should request something from an api client with a schema. Type "Any" is just for testing.
	const [data, err] = await fetchWrapped<any>(
		fetch(process.env.URL + Endpoint.ALL_WINE, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
	)

    if (err) return <div>Implement error handling pls</div>

	const transformedData = transformWinesIntoStructuralData(data)

	return (
		<div className="items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full flex items-center justify-center">
				<ul className="w-full max-w-3xl block">
					{transformedData.map((row: any, index: number) =>
						renderTypeSections(row, index)
					)}
				</ul>
			</main>
		</div>
	);
}
