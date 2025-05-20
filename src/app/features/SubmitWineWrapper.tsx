"use client"

import { useEffect, useState } from "react"
import Modal from "../components/modal/Modal"
import { Button } from "../components/button/Button"
import { rubikFont } from "../util/font/fonts"

export default function SubmitWineWrapper({
	children,
}: Readonly<{ children: React.ReactNode}>) {
	const [isModalOpen, setModalOpen] = useState(false)
	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	useEffect(() => {
		document.addEventListener("submit", (e) => {
			// This is a retarded hack. Figure out a way to close the modal after data has been submitted.
			const APPROX_TIME_OF_PROMISE_RESOLVE = 1250
			setTimeout(() => {
				closeModal()
			}, APPROX_TIME_OF_PROMISE_RESOLVE)
		})
	},[])

	const btnConfigOpenModal = {
		name: "New +",
		stripStyling: false,
		styling: `me-2 min-w-16 bg-confirm-green-400 hover:bg-confirm-green-800 disabled:opacity-50 transition-opacity text-white text-[10px] font-sans font-bold ${rubikFont.variable} justify-center py-2 px-3 text-gray-900 rounded-sm inline-flex items-center`,
		callback: () => openModal(),
	}

	const btnConfigCancel = {
		name: "Cancel",
		stripStyling: false,
		styling: "border border-slate-200 text-[10px] font-sans w-full",
		callback: () => closeModal(),
	}
	
	return (
		<div>
			<Button {...btnConfigOpenModal}/>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				message="Add new wine"
				childStyles="flex-col"
			>
				{children}
				<Button {...btnConfigCancel} />
			</Modal>
		</div>
	)
}
