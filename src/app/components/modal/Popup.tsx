"use client"

import React, { useEffect, useRef } from "react"
import { FC, ReactNode, useState } from "react"

interface PopupProps {
	innerChildren?: ReactNode
	outerChildren?: ReactNode
}

const Popup: FC<PopupProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const popupRef = useRef<HTMLElement>(null)
	
	const togglePopup = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const popupElement = popupRef.current

		if (popupElement) {
			popupElement.focus()
			
			const handleDialogClick = (event: MouseEvent) => {
				if ((event.target as HTMLElement) != popupElement) {
					togglePopup()
				}
			}
			document.addEventListener("click", handleDialogClick)
			return () => document.removeEventListener("click", handleDialogClick)
		}
	}, [isOpen, togglePopup])

	return (
		<React.Fragment>
			<div onClick={togglePopup}>
				{props.outerChildren}
			</div>
			{isOpen && (
				<article ref={popupRef} className="shadow-md rounded-sm bg-paper-400 max-w-[100px] w-fit absolute right-6 bottom-5">
					<div onClick={togglePopup}>
						{props.innerChildren}
					</div>
				</article>
				)
			}
		</React.Fragment>
	)
}

export default Popup
