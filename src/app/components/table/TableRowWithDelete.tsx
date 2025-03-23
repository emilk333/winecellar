"use client"

import React, { FC, useState } from "react"
import Modal from "./../modal/Modal"
import { Wine } from "@/types/schema"
import { Paragraph } from "../text/Text"
import { TableRow } from "./TableRow"
import { useRouter } from "next/navigation"

interface TableRowWithDeleteProps {
	row: Wine
	key: number
}

export const TableRowWithDelete: FC<TableRowWithDeleteProps> = ({
	row,
	key,
}) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const modalMessage = `Are you sure you want to delete ${row.vintage} ${
		row.name ?? ""
	} ${row.producer}?`

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)
	const router = useRouter()

	const deleteWine = async (id: number) => {
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
		callback: () => openModal(),
	}

	return (
		<React.Fragment>
			<TableRow
				row={row}
				key={key}
				Component={Paragraph}
				buttonConfig={buttonConfig}
			/>
			<tr>
				<td>
					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						message={modalMessage}
					>
						<button
							onClick={() =>
								deleteWine(row.id).then(() => router.refresh())
							}
						>
							Delete
						</button>
						<button onClick={closeModal}>Cancel</button>
					</Modal>
				</td>
			</tr>
		</React.Fragment>
	)
}
