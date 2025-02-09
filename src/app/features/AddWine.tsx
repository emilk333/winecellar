"use client"

import { createWine } from "@/app/actions/createWine";
import Input from "@/app/components/input/Input";
import TableRow from "@/app/components/table/TableRow";
import Form from 'next/form'

export default function AddWine() {

    const defaultValue = {
        vintage: Number.MIN_VALUE,
        country: "",
        name: "",
        producer: "",
        appelation: "",
        price: {
            buyingPrice: Number.MIN_VALUE,
            estimatedCurrentValue: Number.MIN_VALUE
        }
    }

    return (
        <form action={createWine}>
            <table className="w-full">
                <caption className="sr-only"></caption>
                <thead className="sr-only"></thead>
                <tbody>
                    <TableRow row={defaultValue} Component={Input} index={1}/>
                </tbody>
            </table>
            <Input message={""} id="type"/>
            <Input message={""} id="country"/>
            <button type="submit">Submit</button>
        </form>
    )
}