import { db } from "@/db"
import { wines } from "../../../drizzle/schema"
import { Wine } from "@/types/schema"
import { SimpleError } from "@/types/generalTypes"


// WTF is this shit - this is placed in the waaay wrong place... 
export async function getAllWine(): Promise<[Wine[] | undefined, SimpleError | undefined]> {
	// const [y, x] = await fetchWrapped(fetch(`http://localhost:3001/api/winelist/completeList`))
	// //@ts-ignore
	// return [y, undefined]

	try {
		const data = (await db.select().from(wines)) as Wine[] // Thanks Drizzle ...
		return [data, undefined]
	} catch (e) {
		if (e instanceof Error) {
			const error: SimpleError = { message: e.message }
			return [undefined, error]
		}
		return [undefined, { message: "Unknown error" }]
	}
}
