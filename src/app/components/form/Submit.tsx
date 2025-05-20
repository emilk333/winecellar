"use client"

import { useFormStatus } from "react-dom"
import { rubikFont } from "@/app/util/font/fonts"
import Loading from "../loading/Loading"

export default function Submit() {
	const { pending } = useFormStatus()
	return(
		<button className={`w-full me-2 min-w-24 bg-confirm-green-400 hover:bg-confirm-green-800 disabled:opacity-50 transition-opacity text-white text-[10px] font-sans font-bold ${rubikFont.variable} justify-center py-1.5 px-3 text-gray-900 rounded-sm inline-flex items-center`} type="submit" disabled={pending}>
			{pending ? <Loading/> : "Submit"}
		</button>
	)
}
