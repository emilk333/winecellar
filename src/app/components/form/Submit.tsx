"use client"

import { useFormStatus } from "react-dom"
import { Spinner } from "../loading/Spinner"

export default function Submit() {
	const { pending } = useFormStatus()
	return(
		<button type="submit" disabled={pending}>
			{pending ? <Spinner/> : "Submit"}
		</button>
	)
}
