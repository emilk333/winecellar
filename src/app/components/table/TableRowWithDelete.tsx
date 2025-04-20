"use client"

import React, { FC, useRef, useState } from "react"
import Modal from "./../modal/Modal"
import { Wine } from "@/types/schema"
import { Paragraph } from "../text/Text"
import { TableRow } from "./TableRow"
import { useRouter } from "next/navigation"
import { fetchWrapped } from "@/app/util/fetch"
import { Button } from "../button/Button"
import TimesIcon from "../svg/Times"
import { MouseTracker } from "../cursor/FollowCursor"
import { rubikFont } from "@/app/util/font/fonts"

interface TableRowWithDeleteProps {
	row: Wine
	index: number
}

export const TableRowWithDelete: FC<TableRowWithDeleteProps> = ({
	row,
	index
}) => {
	
	const [isModalOpen, setModalOpen] = useState(false)
	const router = useRouter()
	const modalMessage = `You are about to permanently delete ${row.vintage} ${
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

	const btnConfigTableRow = {
		name: <div className="flex items-center">
			<MouseTracker offset={{ x: 10, y: 0 }} elementIdentifier={index}>
				<TimesIcon color={"fill-red-500"}/>
				<span className={`pl-1 font-sans text-[10px] ${rubikFont.variable}`}>Delete</span>
			</MouseTracker>
		</div>,
		stripStyling: false,
		styling: `w-full min-h-4`,
		callback: () => openModal(),
	}

	const btnConfigCancel = {
		name: "Cancel",
		stripStyling: false,
		styling: "border border-slate-200 text-[10px] font-sans",
		callback: () => closeModal(),
	}
	
	const btnConfigDeleteRow = {
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
				index={index}
				Component={Paragraph}
				buttonConfig={btnConfigTableRow}
			/>
			<tr>
				<td>
					<Modal
						isOpen={isModalOpen}
						onClose={closeModal}
						message={modalMessage}
					>
						<Button {...btnConfigDeleteRow}/>
						<Button {...btnConfigCancel}/>
					</Modal>
				</td>
			</tr>
		</React.Fragment>
	)
}
