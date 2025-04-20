// @ts-nocheck
"use client"
import { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"

export const MouseTracker = ({ children, elementIdentifier, offset = { x: 0, y: 0 } }) => {
	const element = useRef({})
    const [documentMouned, setDocumentMounted] = useState(false);

	useEffect(() => {
        setDocumentMounted(true)

		function handler(e) {
			if (element.current) {
				const x = e.clientX + offset.x,
					y = e.clientY + offset.y
				element.current.style.transform = `translate(${x}px, ${y}px)`
			}
		}
		window.addEventListener("mousemove", handler)
		return () => window.removeEventListener("mousemove", handler)
	}, [offset.x, offset.y])

    const content = <div className="group-hover:block hidden fixed top-0 left-0 pointer-events-none" ref={element}>
                        {children}
                    </div>

	if (documentMouned) {
		return createPortal(
			content,
			document.querySelector(`#delete-btn-id-${elementIdentifier}`)
		)
	}
}
