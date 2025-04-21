import thousandCommaSeparator from "@/app/util/currency"
import { Button, ButtonProps } from "../button/Button"
import { Wine } from "@/types/schema"
import { WinePrice } from "@/types/generalTypes"
import { FC } from "react"
import { FakeRow } from "@/app/features/AddWine"
import { InputProps } from "../input/Input"
import Popup from "../modal/Popup"

// ComponentProps is a combined interface of every possible component interface. E.g. Input
export interface TableCellComponent extends InputProps{
	message: number | string | null
	id: string
}

interface TableRowProps {
	row?: Wine | FakeRow
	Component: FC<TableCellComponent>
	optionsButtonConfig?: ButtonProps
	deleteButtonConfig?: ButtonProps
}

export const TableRow: FC<TableRowProps> = ({
	row,
	Component,
	optionsButtonConfig,
	deleteButtonConfig
}) => {
	if (!row) return

	const rowPrice = row.price as WinePrice | null // TODO Stupid hack - define type from drizzle
	const price = rowPrice?.buyingPrice ? thousandCommaSeparator(rowPrice.buyingPrice) : ""
	
	return (
		<tr className="relative flex flex-row w-full text-sm">
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
			<td className="flex items-center ml-3">
				{optionsButtonConfig && deleteButtonConfig &&
					<Popup
						outerChildren={<Button {...optionsButtonConfig} />}
						innerChildren={<Button {...deleteButtonConfig}/>}
					/>
				}
			</td>
		</tr>
	)
}
