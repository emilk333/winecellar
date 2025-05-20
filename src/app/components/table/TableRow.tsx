import thousandCommaSeparator from "@/app/util/currency"
import { Button, ButtonProps } from "../button/Button"
import { Wine } from "@/types/schema"
import { WinePrice } from "@/types/generalTypes"
import { FC } from "react"
import Popup from "../modal/Popup"

interface TableRowProps {
	row?: Wine
	optionsButtonConfig?: ButtonProps
	deleteButtonConfig?: ButtonProps
}

export const TableRow: FC<TableRowProps> = ({
	row,
	optionsButtonConfig,
	deleteButtonConfig
}) => {
	if (!row) return

	// TODO this should be a generic component. Its clearly not .. 

	const rowPrice = row.price as WinePrice | null // TODO Stupid hack - define type from drizzle
	const price = rowPrice?.buyingPrice ? thousandCommaSeparator(rowPrice.buyingPrice) : ""
	
	return (
		<tr className="relative flex flex-row w-full text-lg">
			<td className="basis-1/12 px-1">
				<p>{row.vintage}</p>
			</td>
			<td className="basis-4/12 px-1">
				<p>{row.name}</p>
			</td>
			<td className="basis-4/12 px-1">
				<p>{row.producer}</p>
			</td>
			<td className="basis-3/12 px-1">
				<p>{row.appelation}</p>
			</td>
			<td className="basis-1/12 text-right px-1">
				<p>{price && `${price},-`}</p>
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
