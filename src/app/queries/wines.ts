import { db } from "@/db"
import { wines } from "../../../drizzle/schema"
import { Wine } from "@/types/schema"

interface WineError {
	message: string
	// Do some better error handling.. Maybe construct Error types based on Drizzle own types. 
}

export async function getAllWine(): Promise<[Wine[] | undefined, WineError | undefined]> {
	try {
		const data = (await db.select().from(wines)) as Wine[] // Thanks Drizzle ...
		return [data, undefined]
	} catch (e) {
		if (e instanceof Error) {
			console.error(`Error fetching wines: ${e.message}`)
			const error: WineError = { message: e.message }
			return [undefined, error]
		}
		return [undefined, { message: "Unknown error" }]
	}
}
