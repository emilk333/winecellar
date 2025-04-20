"use client"

import { FC } from "react"
import { TableCellComponent } from "../table/TableRow"

export const Input: FC<TableCellComponent> = ({ message, id }) => {
	return (
		<div className="relative">
			<label htmlFor="search" className="">
				{id}
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={message?.toString()}
				name={id}
			/>
		</div>
	)
}
