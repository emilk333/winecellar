import thousandCommaSeparator from "@/app/util/currency"
import { Button, ButtonProps } from "../button/Button"
import { Wine } from "@/types/schema"
import { WinePrice } from "@/types/generalTypes"
import { FC } from "react"
import Popup from "../modal/Popup"
import { useWineQuantity } from "@/app/hooks/modifyWineQuantity"
import { changeWineQuantity } from "@/app/actions/changeWineQuantity"
import { deleteWine } from "@/app/actions/deleteWine"
import { Spinner } from "../loading/Spinner"
import Defend from "../svg/Defend"
import Distance from "../svg/Distance"

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
	const { modifyWineQuantity, isLoading } = useWineQuantity({
		changeWineQuantity,
		deleteWine,
	})
	
	if (!row) return

	// TODO this should be a generic component. Its clearly not .. 

	const rowPrice = row.price as WinePrice | null // TODO Stupid hack - define type from drizzle
	const price = rowPrice?.buyingPrice ? thousandCommaSeparator(rowPrice.buyingPrice) : ""

	return (
		<tr className="relative flex flex-row w-full">
			<td className="w-8 pr-1 flex items-center">
				{row.isRemote && <Distance/>}
			</td>
			<td className="w-8 pr-1 flex items-center">
				{row.isRestricted && <Defend/>}
			</td>
			<td className="w-16 pr-2">
				<p>{row.vintage}</p>
			</td>
			<td className="basis-5/12 md:px-2 pr-2 capitalize">
				<p>{row.name}</p>
			</td>
			<td className="basis-4/12 md:px-2 pr-2 capitalize">
				<p>{row.producer}</p>
			</td>
			<td className="basis-3/12 md:px-2 pr-2 capitalize">
				<p>{row.subAppelation}</p>
			</td>
			<td className="w-20 text-right lg:pr-2 pr-6">
				<p>{price && `${price},-`}</p>
			</td>
			<td className="text-right md:px-2 pr-2 group relative">
				{row.quantity && 
					<>
						<div className={`z-10 hidden group-hover:flex flex-col shadow-md rounded-sm bg-paper-100 w-fit absolute right-5 -top-4`}>
							<button 
								onClick={() => modifyWineQuantity(row, "increase")}
								className="hover:bg-paper-400 flex items-center justify-center lg:h-8 lg:w-8 h-10 w-10 font-sans text-lg">+</button>
							<button 
								onClick={() => modifyWineQuantity(row, "decrease")}
								className="hover:bg-paper-400 flex items-center justify-center lg:h-8 lg:w-8 h-10 w-10 font-sans text-lg">-</button>
						</div>
						<span>{isLoading ? <Spinner/> : row.quantity}</span>
					</>
				}
			</td>
			<td className="flex ml-3">
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
