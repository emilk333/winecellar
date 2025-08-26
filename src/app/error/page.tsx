import { ErrorTemplate } from "../features/ErrorTemplate";

export default function ErrorPage() {
    const error = new Error("Login failed")
	return <ErrorTemplate {...error} />
}
