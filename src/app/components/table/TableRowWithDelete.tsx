"use client"

import Paragraph from "../text/Text"
import TableRow from "./TableRow"

export default function TableRowWithDelete({ row, index }: any) {

	const testRun = async (id: any) => {
		const payload = { id: id }
		try {
			await fetch(`http://localhost:3000/api/deleteWine`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
		} catch (error) {
			console.error("Error:", error)
		}
	}

	const buttonConfig = {
		name: "delete",
		callback: () => testRun(row.id),
	}

	return (
		<TableRow
			row={row}
			key={index}
			Component={Paragraph}
			buttonConfig={buttonConfig}
		/>
	)
}
