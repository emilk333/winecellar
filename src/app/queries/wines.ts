import { db } from "@/db";
import { wines } from "../../../drizzle/schema";
import { Wine } from "@/types/schema";

export async function getAllWine(): Promise<Wine[]> {
    return await db.select().from(wines)
}