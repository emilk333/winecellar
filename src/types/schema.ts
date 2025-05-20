import { wines } from "@/../drizzle/schema"

type WineFromORM = typeof wines.$inferSelect

type ModifyProperty<T, K extends keyof T, NewType> = {
	[P in keyof T]: P extends K ? NewType : T[P]
}

export enum WineType {
	Sparkling = "sparkling",
	Champagne = "champagne",
	White = "white",
	Red = "red",
	Rosé = "rose",
	Orange = "orange",
	Sweet = "sweet",
	Port = "port",
}


// It is fucking unbeliable that you have to manually modify your types from the Drizzle ORM. 
// https://github.com/drizzle-team/drizzle-orm/discussions/1914 
// ModifyProperty transforms the type <type> from string -> enum 

export type Wine = ModifyProperty<WineFromORM, "type", WineType | null>
