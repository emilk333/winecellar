import { cwd } from "node:process"
import { defineConfig } from "drizzle-kit"
import { loadEnvConfig } from "@next/env"

loadEnvConfig(cwd())

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  schemaFilter: "public",
  verbose: true,
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
})
