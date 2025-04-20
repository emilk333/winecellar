import thousandCommaSeparator from "@/app/util/currency"
import Image from "next/image"
import { Button, ButtonProps } from "../button/Button"
import { Wine } from "@/types/schema"
import { WinePrice } from "@/types/generalTypes"
import { FC } from "react"
import { FakeRow } from "@/app/features/AddWine"

// ComponentProps is a combined interface of every possible component interface. E.g. Input
export interface TableCellComponent {
	message: number | string | null
	id: string
}

interface TableRowProps {
	row?: Wine | FakeRow,
	index: number
	Component: FC<TableCellComponent>
	buttonConfig?: ButtonProps
}

export const TableRow: FC<TableRowProps> = ({
	row,
	index,
	Component,
	buttonConfig,
}) => {
	if (!row) return

	const rowPrice = row.price as WinePrice | null // TODO Stupid hack - define type from drizzle
	const price = rowPrice?.buyingPrice ? thousandCommaSeparator(rowPrice.buyingPrice) : ""

	return (
		<tr className="relative flex flex-row w-full text-sm group">
			<td className="basis-1/12 group-hover:opacity-25">
				<Component message={row.vintage} id="vintage" />
			</td>
			<td className="basis-4/12 group-hover:opacity-25">
				<Component message={row.name} id="name" />
			</td>
			<td className="basis-4/12 group-hover:opacity-25">
				<Component message={row.producer} id="producer" />
			</td>
			<td className="basis-3/12 group-hover:opacity-25">
				<Component message={row.appelation} id="appelation" />
			</td>
			<td className="basis-1/12 text-right group-hover:opacity-25">
				<Component message={price} id="price" />
			</td>
			<td className="flex items-center ml-3">
				<div id={`delete-btn-id-${index}`} className="absolute items-center justify-center flex inset-0 w-full">
					{buttonConfig && <Button {...buttonConfig} /> }
				</div>
			</td>
		</tr>
	)
}
