import { createWine } from "@/app/actions/createWine"
import { Input } from "../components/input/Input"
import Submit from "../components/form/Submit"

export default function AddWine() {
	return (
		<div className="w-full relative mb-1 max-w-screen-lg justify-self-center w-full h-full">
			<form action={createWine}>
				<div className="flex space-x-2">
					<Input message={""} id="vintage" displayLable={true} />
					<Input message={""} id="price" displayLable={true} />
					<Input message={""} id="quantity" displayLable={true} />
				</div>
				<Input message={""} id="name" displayLable={true} />
				<Input message={""} id="producer" displayLable={true} />
				<Input message={""} id="appelation" displayLable={true} />
				<div className="flex space-x-2">
					<Input message={""} id="type" displayLable={true} />
					<Input message={""} id="country" displayLable={true} />
				</div>
				<div className="mt-8">
					<Submit />
				</div>
			</form>
		</div>
	)
}
