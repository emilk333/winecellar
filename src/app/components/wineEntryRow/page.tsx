import Image from "next/image";

export default function StaticEntryRow({ row }: any) {

	return (
		<li className="flex flex-row w-full">
			<div className="basis-1/12">
				{row.vintage}
			</div>
			<div className="basis-4/12">
				{row.name}
			</div>
			<div className="basis-4/12">
				{row.producer}
			</div>
			<div className="basis-3/12">
				{row.appelation}
			</div>
			<div className="basis-1/12 text-right">
				{row.price.buyingPrice}
			</div>
		</li>
	)
}

