import { createWine } from "@/app/actions/createWine"
import { Input } from "../components/input/Input"
import { SubmitButton } from "../components/button/SubmitButton"
import { Checkbox } from "../components/input/Checkbox"

export default function AddWine() {

	const inputAttrVintage = {
        type: "text",
        name: "vintage",
        label: "Vintage",
        required: true
    }

	const inputAttrPrice = {
        type: "text",
        name: "price",
        label: "Price",
        required: true
    }

	const inputAttrQuantity = {
        type: "text",
        name: "quantity",
        label: "Quantity",
        required: true
    }

	const inputAttrName = {
        type: "text",
        name: "name",
        label: "Name",
        required: true
    }

	const inputAttrProducer = {
        type: "text",
        name: "producer",
        label: "Producer",
        required: true
    }

	const inputAttrAppelation = {
        type: "text",
        name: "appelation",
        label: "Appelation",
        required: true
    }

	const inputAttrSubAppelation = {
        type: "text",
        name: "sub-appelation",
        label: "Subappelation",
        required: true
    }

	const inputAttrType = {
        type: "text",
        name: "type",
        label: "Type",
        required: true
    }

	const inputAttrCountry = {
        type: "text",
        name: "country",
        label: "Country",
        required: true
    }

    const inputAttrIsRestricted = {
        type: "checkbox",
        name: "is_restricted",
        label: "Restrict wine",
        required: true
    }

    const inputAttrIsRemote = {
        type: "checkbox",
        name: "is_remote",
        label: "Located remote",
        required: true
    }

	const submitButtonStyling = "w-full me-2 min-w-24 bg-confirm-green-400 hover:bg-confirm-green-800 disabled:opacity-50 transition-opacity text-white text-sm font-sans font-bold ${aleoFont.variable} justify-center py-2 px-4 text-gray-900 rounded-sm inline-flex items-center"

	return (
		<div className="w-full relative mb-1 justify-self-center w-full h-full">
			<form action={createWine}>
				<div className="flex space-x-2">
					<Input message={""} id={inputAttrVintage.name} displayLable={true} attributes={inputAttrVintage}/>
					<Input message={""} id={inputAttrPrice.name} displayLable={true} attributes={inputAttrPrice}/>
					<Input message={""} id={inputAttrQuantity.name} displayLable={true} attributes={inputAttrQuantity}/>
				</div>
				<Input message={""} id={inputAttrName.name} displayLable={true} attributes={inputAttrName}/>
				<Input message={""} id={inputAttrProducer.name} displayLable={true} attributes={inputAttrProducer}/>
				<Input message={""} id={inputAttrAppelation.name} displayLable={true} attributes={inputAttrAppelation}/>
				<Input message={""} id={inputAttrSubAppelation.name} displayLable={true} attributes={inputAttrSubAppelation}/>
				<div className="flex space-x-2">
					<Input message={""} id={inputAttrType.name} displayLable={true} attributes={inputAttrType}/>
					<Input message={""} id={inputAttrCountry.name} displayLable={true} attributes={inputAttrCountry}/>
				</div>
                <div className="flex space-x-4 pt-4">
                    <Checkbox id={inputAttrIsRestricted.name} attributes={inputAttrIsRestricted}/>
                    <Checkbox id={inputAttrIsRemote.name} attributes={inputAttrIsRemote}/>
                </div>
				<div className="mt-8">
					<SubmitButton formAction={createWine} styling={submitButtonStyling}>
						Add wine
					</SubmitButton>
				</div>
			</form>
		</div>
	)
}
