// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "winetracker",
			removal: input?.stage === "production" ? "retain" : "remove",
			protect: ["production"].includes(input?.stage),
			home: "aws",
		}
	},
	async run() {
		new sst.aws.Nextjs("winetrackerFrontend", {
			domain: {
				name: "emilcellar.com",
				aliases: ["*.emilcellar.com"],
			},
			environment: {
				DATABASE_URL: process.env.DATABASE_URL! || "",
				NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL! || "",
				NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "",
			}
		})
	},
})
