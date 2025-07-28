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

		const [username, password] = process.env.BASIC_AUTH_CREDENTIALS!.split(":");
		const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");

		new sst.aws.Nextjs("winetrackerFrontend", {
			domain: {
				name: "emilcellar.com",
				aliases: ["*.emilcellar.com"],
			},
			environment: {
				DATABASE_URL: process.env.DATABASE_URL! || "",
				NEXT_PUBLIC_SUPABASE_URL:
					process.env.NEXT_PUBLIC_SUPABASE_URL! || "",
				NEXT_PUBLIC_SUPABASE_ANON_KEY:
					process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! || "",
			},
			server: {
				// Don't password protect prod
				edge:
					$app.stage === "production"
						? {
								viewerRequest: {
									injection: $interpolate`
						if (
							!event.request.headers.authorization
							|| event.request.headers.authorization.value !== "Basic ${basicAuth}"
						) {
						return {
							statusCode: 401,
							headers: {
							"www-authenticate": { value: "Basic" }
							}
						};
						}`,
								},
						  }
						: undefined,
			},
		})
	},
})
