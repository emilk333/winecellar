import Image from "next/image";

export default function Table({ row }: any) {
	return (
		<table className="w-full">
			<caption className="hidden"></caption>
			<thead className="hidden"></thead>
			<tbody>
				<tr className="flex flex-row w-full">
					<td className="basis-1/12">{row.vintage}</td>
					<td className="basis-4/12">{row.name}</td>
					<td className="basis-4/12">{row.producer}</td>
					<td className="basis-3/12">{row.appelation}</td>
					<td className="basis-1/12 text-right">
						{row.price.buyingPrice}
					</td>
				</tr>
			</tbody>
		</table>
	)
}