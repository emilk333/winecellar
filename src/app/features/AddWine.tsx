
import { createWine } from "@/app/actions/createWine"
import { Input } from "../components/input/Input"
import { TableRow } from "../components/table/TableRow"
import { WinePrice } from "@/types/generalTypes"
import Submit from "../components/form/Submit"

export interface FakeRow {
	vintage: number
	country: string
	name: string
	producer: string
	appelation: string
	price: WinePrice
}

export default function AddWine() {
	// Default value enables render of fields.
	const defaultValue = {
		vintage: Number.MIN_VALUE,
		country: "",
		name: "",
		producer: "",
		appelation: "",
		price: {
			buyingPrice: Number.MIN_VALUE,
			estimatedCurrentValue: Number.MIN_VALUE,
		},
	}

	return (
		<form action={createWine}>
			<table className="w-full">
				<caption className="sr-only"></caption>
				<thead className="sr-only"></thead>
				<tbody>
					<TableRow row={defaultValue} Component={Input} />
				</tbody>
			</table>
			<Input message={""} id="type" />
			<Input message={""} id="country" />
			<Submit />
		</form>
	)
}
