import { Wine, WineType } from "@/types/schema"

// THIS SHOULD BE HOOKS

export interface TypeWine {
	type: WineType
	wines: CountryWine[]
}

export interface CountryWine {
	country: string | null
	wines: AppelationWine[]
}

export interface AppelationWine {
	appelation: string | null
	wines: Wine[]
}

function filterUniqueByProperty<T>(arr: Array<T>, prop: keyof T) {
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
	const uniqueTypes = filterUniqueByProperty<Wine>(wines, "type")
		.map((wine) => wine.type)
		.filter((type) => type !== null)
	
	return wines
		.map((_: Wine, index: number) => {
			const winesByType = wines.filter(
				(wine: Wine) => wine.type === uniqueTypes[index]
			)

			return {
				type: uniqueTypes[index],
				wines: filterByCountry(winesByType),
			}
		})
		.filter((item) => item.type)
}

function filterByCountry(wines: Wine[]): CountryWine[] {
	const uniqueCountries = filterUniqueByProperty(wines, "country")
		.map((wine) => wine.country)
		.filter((country) => country !== null)

	return wines
		.map((_: Wine, index: number) => {
			const winesByCountry = wines.filter(
				(wine: Wine) =>
					wine.country === uniqueCountries[index]
			)
			return {
				country: uniqueCountries[index],
				wines: filterByAppelation(winesByCountry),
			}
		})
		.filter((item) => item.country)
}

function filterByAppelation(wines: Wine[]): AppelationWine[] {
	const uniqueAppelations = filterUniqueByProperty(wines, "appelation")
		.map((wine) => wine.appelation)
		.filter((appelation) => appelation !== null)

	return wines
		.map((_: Wine, index: number) => {
			const winesByAppelation = wines.filter(
				(wine: Wine) =>
					wine.appelation === uniqueAppelations[index]
			)

			return {
				appelation: uniqueAppelations[index],
				wines: winesByAppelation,
			}
		})
		.filter((item) => item.appelation)
}

const filterWinesBySearchQuery = (originalWines: Wine[], query: string) => {
	const searchResults: Wine[] = []
	originalWines.forEach((wine: Wine) => {
		let match = false
		Object.entries(wine).forEach((property) => {
			const [_, value] = property
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
