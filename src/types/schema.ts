import { wines } from "@/../drizzle/schema";

export type Wine = typeof wines.$inferSelect;