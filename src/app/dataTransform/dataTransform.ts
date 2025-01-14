
// TODO THIS SHOULD NOT BE DONE. THE DATABASE SHOULD RETURN WHAT WE NEED. THIS IS 
// ONLY FOR TESTING 

enum WineType {
    White = "white",
    Red = "red",
    Rosé = "rose",
    Orange = "orange",
    Sweet = "sweet",
    Port = "port"
}

function filterUniqueByProperty(arr: any, prop: any) {
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


function filterByType(wines: any) {
    const uniqueTypes = filterUniqueByProperty(wines, "type").map(wine => wine.type)
    return wines.map((_: any, index: number) => {
        const winesByType = wines.filter((whiteWine: any) => whiteWine.type === uniqueTypes[index])
        
        return {
            type: uniqueTypes[index],
            wines: filterByCountry(winesByType)
        }
    }).filter((item:any) => item.type)
}

function filterByCountry(wines: any) {
    const uniqueCountries = filterUniqueByProperty(wines, "country").map(wine => wine.country)
    
    return wines.map((_: any, index: number) => {
        const winesByCountry = wines.filter((whiteWine: any) => whiteWine.country === uniqueCountries[index])
        return {
            country: uniqueCountries[index],
            wines: filterByAppelation(winesByCountry)
        }
    }).filter((item:any) => item.country)
}

function filterByAppelation(wines: any) {
    const uniqueAppelations = filterUniqueByProperty(wines, "appelation").map(wine => wine.appelation)
    
    return wines.map((_: any, index: number) => {
        const winesByAppelation = wines.filter((whiteWine: any) => whiteWine.appelation === uniqueAppelations[index])
        
        return {
            appelation: uniqueAppelations[index],
            wines: winesByAppelation
        }
    }).filter((item:any) => item.appelation)
}


const filterWinesBySearchQuery = (originalWines: any, query: string) => {
    let searchResults: any = []

    originalWines.forEach((wine: any) => {
        let match = false
        Object.entries(wine).forEach((property) => {
            const [key, value] = property
            if ((typeof value === 'string' || typeof value == 'number')&& value.toString().toLowerCase().includes(query)) {
                match = true
            }
        })
        if (match) {
            searchResults.push(wine)
        }
    })

    return searchResults
}


const transformWinesIntoStructuralData = (originalWines: any, query: string): any => {
    return filterByType(filterWinesBySearchQuery(originalWines, query))
}


export { transformWinesIntoStructuralData }