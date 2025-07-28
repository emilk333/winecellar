// middleware.ts
import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware"

const options = {
	users: [{ name: "username", password: "password" }],
}

export const middleware = createNextAuthMiddleware(options)

export const config = {
	matcher: ["/(.*)"], // Replace this with your own matcher logic
}
