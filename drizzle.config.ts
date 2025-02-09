import { cwd } from "node:process"
import { defineConfig } from "drizzle-kit"
import { loadEnvConfig } from "@next/env"

loadEnvConfig(cwd())

export default defineConfig({
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
})
