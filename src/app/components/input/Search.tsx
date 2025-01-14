"use client"

import { debounce } from "@/app/util/debounce"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useMemo } from "react"

export default function Search({ placeholder }: { placeholder: string }) {
	const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

	const handleSearch = useMemo(
        () => debounce((term: string) => {
            const params = new URLSearchParams(searchParams)
            if (term) {
                params.set("query", term)
            } else {
                params.delete("query")
            }
            replace(`${pathname}?${params.toString()}`)
        }, 200),
        []
    )

	return (
		<div className="relative flex flex-1 flex-shrink-0">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value)
				}}
                defaultValue={searchParams.get('query')?.toString()}
			/>
			{/* icon here */}
		</div>
	)
}