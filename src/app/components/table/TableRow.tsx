import thousandCommaSeparator from "@/app/util/currency";
import Image from "next/image";
import Button from "../button/Button";

export default function TableRow({ row, Component, index, buttonConfig }: any) {
	const price = row.price?.buyingPrice ? thousandCommaSeparator(row.price?.buyingPrice) : ""
		
	return (
		<tr className="flex flex-row w-full">
			<td className="basis-1/12">
				<Component message={row.vintage} id="vintage"/> 
			</td>
			<td className="basis-4/12">
				<Component message={row.name} id="name"/> 
			</td>
			<td className="basis-4/12">
				<Component message={row.producer} id="producer"/> 
			</td>
			<td className="basis-3/12">
				<Component message={row.appelation} id="appelation"/> 
			</td>
			<td className="basis-1/12 text-right">
				<Component message={price} id="price"/> 
			</td>
				<td>
					<Button {...buttonConfig}/>
				</td>
		</tr>
	)
}