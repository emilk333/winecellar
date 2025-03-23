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
	row?: Wine | FakeRow
	Component: FC<TableCellComponent>
	buttonConfig?: ButtonProps
}

export const TableRow: FC<TableRowProps> = ({
	row,
	Component,
	buttonConfig,
}) => {
	if (!row) return

	const rowPrice = row.price as WinePrice | null // TODO Stupid hack - define type from drizzle
	const price = rowPrice?.buyingPrice ? thousandCommaSeparator(rowPrice.buyingPrice) : ""

	return (
		<tr className="flex flex-row w-full">
			<td className="basis-1/12">
				<Component message={row.vintage} id="vintage" />
			</td>
			<td className="basis-4/12">
				<Component message={row.name} id="name" />
			</td>
			<td className="basis-4/12">
				<Component message={row.producer} id="producer" />
			</td>
			<td className="basis-3/12">
				<Component message={row.appelation} id="appelation" />
			</td>
			<td className="basis-1/12 text-right">
				<Component message={price} id="price" />
			</td>
			<td>
				{buttonConfig && <Button {...buttonConfig} /> }
			</td>
		</tr>
	)
}
