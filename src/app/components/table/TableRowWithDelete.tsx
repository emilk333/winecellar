"use client"

import React, { FC, useState } from "react"
import Modal from "./../modal/Modal"
import { Wine } from "@/types/schema"
import { TableRow } from "./TableRow"
import { useRouter } from "next/navigation"
import { fetchWrapped } from "@/app/util/fetch"
import { Button } from "../button/Button"
import DotMenu from "../svg/DotMenu"
import TimesIcon from "../svg/Times"
import { changeWineQuantity } from "@/app/actions/changeWineQuantity"
import { useWineQuantity } from "@/app/hooks/modifyWineQuantity"

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

	// Why use a route handler, when you can call an action directly???? 
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
			<p className="pl-1 font-sans text-sm mt-0.5">Delete</p>
		</div>,
		stripStyling: false,
		styling: `min-h-4`,
		callback: () => openModal(),
	}

	const btnConfigTableOptions = {
		name: <DotMenu color={"fill-red-500"}/>,
		stripStyling: false,
		styling: `min-h-4 !p-1`,
		callback: () => {},
	}

	const btnConfigCancel = {
		name: "Cancel",
		stripStyling: false,
		styling: "border border-slate-200 text-sm font-sans",
		callback: () => closeModal(),
	}
	
	const btnConfigModalDelete = {
		name: `I understand, delete this wine`,
		stripStyling: false,
		styling: "me-2 w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 transition-opacity text-white text-sm font-sans font-bold",
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
				optionsButtonConfig={btnConfigTableOptions}
				deleteButtonConfig={btnConfigDeleteWine}
			/>
			<tr>
				<td>
					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						message={modalMessage}
						childStyles="lg:flex-row flex-col"
					>
						<Button {...btnConfigModalDelete}/>
						<Button {...btnConfigCancel}/>
					</Modal>
				</td>
			</tr>
		</React.Fragment>
	)
}
