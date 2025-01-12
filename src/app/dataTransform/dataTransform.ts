
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
    })
}

function filterByCountry(wines: any) {
    const uniqueCountries = filterUniqueByProperty(wines, "country").map(wine => wine.country)
    
    return wines.map((_: any, index: number) => {
        const winesByCountry = wines.filter((whiteWine: any) => whiteWine.country === uniqueCountries[index])
        return {
            country: uniqueCountries[index],
            wines: filterByAppelation(winesByCountry)
        }
    })
}

function filterByAppelation(wines: any) {
    const uniqueAppelations = filterUniqueByProperty(wines, "appelation").map(wine => wine.appelation)
    
    return wines.map((_: any, index: number) => {
        const winesByAppelation = wines.filter((whiteWine: any) => whiteWine.appelation === uniqueAppelations[index])
        return {
            appelation: uniqueAppelations[index],
            wines: winesByAppelation
        }
    })
}


// Return type should be the same type as the orignal data?
const transformWinesIntoStructuralData = (wines: any): any => {
    return filterByType(wines)
}


export { transformWinesIntoStructuralData }