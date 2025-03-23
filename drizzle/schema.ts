import { pgTable, bigint, uuid, timestamp, text, json } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const wines = pgTable("wines", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).generatedByDefaultAsIdentity({ name: "wines_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	type: text(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	vintage: bigint({ mode: "number" }),
	country: text(),
	name: text(),
	producer: text(),
	appelation: text(),
	price: json(),
});
