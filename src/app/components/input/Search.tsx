"use client"

import { debounce } from "@/app/util/debounce"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useMemo } from "react"
import { Input } from "./Input"

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const handleSearch = useMemo(
		() =>
			debounce((term: string) => {
				const params = new URLSearchParams(searchParams)
				if (term) {
					params.set("query", term)
				} else {
					params.delete("query")
				}
				replace(`${pathname}?${params.toString()}`)
			}, 100),
		[]
	)

	return (
		<div className="relative max-w-screen-lg justify-self-center w-full h-full">
			<Input
				message={placeholder}
				defaultValue={searchParams.get("query")?.toString()}
				id={"search"}
				callback={(e) => handleSearch(e.target.value)}
				displayLable={false}
			/>
		</div>
	)
}
