import { Wine } from "@/types/schema"

export interface TypeWine {
	type: string
	wines: CountryWine[]
}

export interface CountryWine {
	country: string
	wines: AppelationWine[]
}

export interface AppelationWine {
	appelation: string
	wines: Wine[]
}

enum WineType {
	White = "white",
	Red = "red",
	Rosé = "rose",
	Orange = "orange",
	Sweet = "sweet",
	Port = "port",
}

function filterUniqueByProperty(arr: any[], prop: string) {
	const uniqueValues = new Set()
	const uniqueObjects = []

	for (const obj of arr) {
		if (!uniqueValues.has(obj[prop])) {
			uniqueValues.add(obj[prop])
			uniqueObjects.push(obj)
		}
	}

	return uniqueObjects
}

function filterByType(wines: Wine[]): TypeWine[] {
	const uniqueTypes = filterUniqueByProperty(wines, "type").map(
		(wine) => wine.type
	)
	return wines
		.map((_: Wine, index: number) => {
			const winesByType = wines.filter(
				(whiteWine: Wine) => whiteWine.type === uniqueTypes[index]
			)

			return {
				type: uniqueTypes[index],
				wines: filterByCountry(winesByType),
			}
		})
		.filter((item) => item.type)
}

function filterByCountry(wines: Wine[]): CountryWine[] {
	const uniqueCountries = filterUniqueByProperty(wines, "country").map(
		(wine) => wine.country
	)

	return wines
		.map((_: Wine, index: number) => {
			const winesByCountry = wines.filter(
				(whiteWine: Wine) =>
					whiteWine.country === uniqueCountries[index]
			)
			return {
				country: uniqueCountries[index],
				wines: filterByAppelation(winesByCountry),
			}
		})
		.filter((item) => item.country)
}

function filterByAppelation(wines: Wine[]): AppelationWine[] {
	const uniqueAppelations = filterUniqueByProperty(wines, "appelation").map(
		(wine) => wine.appelation
	)

	return wines
		.map((_: Wine, index: number) => {
			const winesByAppelation = wines.filter(
				(whiteWine: Wine) =>
					whiteWine.appelation === uniqueAppelations[index]
			)

			return {
				appelation: uniqueAppelations[index],
				wines: winesByAppelation,
			}
		})
		.filter((item) => item.appelation)
}

const filterWinesBySearchQuery = (originalWines: Wine[], query: string) => {
	let searchResults: Wine[] = []

	originalWines.forEach((wine: Wine) => {
		let match = false
		Object.entries(wine).forEach((property) => {
			const [key, value] = property
			if (
				(typeof value === "string" || typeof value == "number") &&
				value.toString().toLowerCase().includes(query)
			) {
				match = true
			}
		})
		if (match) {
			searchResults.push(wine)
		}
	})

	return searchResults
}

const transformWinesIntoStructuralData = (
	originalWines: Wine[],
	query: string
) => {
	return filterByType(filterWinesBySearchQuery(originalWines, query))
}

export { transformWinesIntoStructuralData }
