"use client"

import React, { FC, useState } from "react"
import Modal from "./../modal/Modal"
import { Wine } from "@/types/schema"
import { Paragraph } from "../text/Text"
import { TableRow } from "./TableRow"
import { useRouter } from "next/navigation"
import { fetchWrapped } from "@/app/util/fetch"
import { Button } from "../button/Button"
import DotMenu from "../svg/DotMenu"
import TimesIcon from "../svg/Times"

interface TableRowWithDeleteProps {
	row: Wine
}

export const TableRowWithDelete: FC<TableRowWithDeleteProps> = ({row}) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const router = useRouter()
	const modalMessage = `You are about to permanently delete: ${row.vintage} ${
		row.name ?? ""
	} ${row.producer}?`

	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)
	const deleteWine = async (id: number) => {
		const payload = { id: id }

		return fetchWrapped(fetch(`/api/deleteWine`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		}))
	}

	const btnConfigDeleteWine = {
		name: <div className="flex items-center justify-center">
			<TimesIcon color={"text-red-600 fill-current"}/>
			<p className="pl-1 font-sans text-[10px] mt-0.5">Delete</p>
		</div>,
		stripStyling: false,
		styling: `min-h-4`,
		callback: () => openModal(),
	}

	const btnConfigTableOptions = {
		name: <DotMenu color={"fill-red-500"}/>,
		stripStyling: false,
		styling: `min-h-4`,
		callback: () => {},
	}

	const btnConfigCancel = {
		name: "Cancel",
		stripStyling: false,
		styling: "border border-slate-200 text-[10px] font-sans",
		callback: () => closeModal(),
	}
	
	const btnConfigModalDelete = {
		name: `I understand, delete this wine`,
		stripStyling: false,
		styling: "me-2 w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-opacity text-white text-[10px] font-sans font-bold",
		callback: async () => {
			return deleteWine(row.id).then(() => {
				closeModal()
				router.refresh()
			})
		}
	}

	return (
		<React.Fragment>
			<TableRow
				row={row}
				Component={Paragraph}
				optionsButtonConfig={btnConfigTableOptions}
				deleteButtonConfig={btnConfigDeleteWine}
			/>
			<tr>
				<td>
					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						message={modalMessage}
						childStyles=""
					>
						<Button {...btnConfigModalDelete}/>
						<Button {...btnConfigCancel}/>
					</Modal>
				</td>
			</tr>
		</React.Fragment>
	)
}
