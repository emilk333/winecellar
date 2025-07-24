import thousandCommaSeparator from "@/app/util/currency"
import { Button, ButtonProps } from "../button/Button"
import { Wine } from "@/types/schema"
import { WinePrice } from "@/types/generalTypes"
import { FC, useState } from "react"
import Popup from "../modal/Popup"
import { rubikFont } from "@/app/util/font/fonts"
import { useWineQuantity } from "@/app/hooks/modifyWineQuantity"
import { changeWineQuantity } from "@/app/actions/changeWineQuantity"
import { deleteWine } from "@/app/actions/deleteWine"
import { Spinner } from "../loading/Spinner"

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
	
	const { modifyWineQuantity, isLoading } = useWineQuantity({
		changeWineQuantity,
		deleteWine,
	})

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
			<td className="basis-3/12 px-1">
				<p>{price && `${price},-`}</p>
			</td>
			<td className="basis-1/12 text-right px-1 group relative">
				<div className={`hidden group-hover:flex flex-col p-2.5 space-y-3 ${rubikFont.className} shadow-md rounded-sm bg-paper-400 w-fit absolute right-5 -top-4`}>
					<button 
						onClick={() => modifyWineQuantity(row, "increase")}
						className="flex items-center justify-center h-4 w-4 font-sans text-lg">+</button>
					<button 
						onClick={() => modifyWineQuantity(row, "decrease")}
						className="flex items-center justify-center h-4 w-4 font-sans text-lg">-</button>
				</div>
				<span>{isLoading ? <Spinner/> : row.quantity}</span>
			</td>
			<td className="flex pt-1 ml-3">
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
