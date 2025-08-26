import { WineType } from "@/types/schema"
import { TypeWine } from "../dataTransform/dataTransform"

export const sortByWineType = (data: TypeWine[]) => {
	return data.sort((a: TypeWine, b: TypeWine) => {
		const wineTypeOrder: { [key in WineType]: number } = {
			[WineType.Champagne]: 1,
			[WineType.Sparkling]: 2,
			[WineType.White]: 3,
			[WineType.Orange]: 4,
			[WineType.Rosé]: 5,
			[WineType.Red]: 6,
			[WineType.Sweet]: 7,
			[WineType.Port]: 8,
		}

		const typeAIndex = a.type
			? wineTypeOrder[a.type]
			: Number.MAX_SAFE_INTEGER
		const typeBIndex = b.type
			? wineTypeOrder[b.type]
			: Number.MAX_SAFE_INTEGER

		return typeAIndex - typeBIndex
	})
}
