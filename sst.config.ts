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
		// Create a Next.js site
		new sst.aws.Nextjs("winetrackerFrontend", {
			environment: {
				DATABASE_URL:"postgresql://postgres.etrtnmlfyidtbnjboden:Shitfaced_333@aws-0-eu-west-3.pooler.supabase.com:6543/postgres",
        NEXT_PUBLIC_SUPABASE_URL:"https://etrtnmlfyidtbnjboden.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cnRubWxmeWlkdGJuamJvZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMTMyMDksImV4cCI6MjA1Mjg4OTIwOX0.2lrzHFVWjNlAtwJGvaRsKfg_hvmEI3fHDifRfo_1n5Q"
			},
		})
	},
})
