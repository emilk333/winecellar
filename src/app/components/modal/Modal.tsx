import { cormorantFont, rubikFont } from "@/app/util/font/fonts"
import { FC, ReactNode, useEffect, useRef } from "react"

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	message: string
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, message }) => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const dialogInner = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const dialogElement = dialogRef.current
		const dialogInnerElement = dialogInner.current

		if (dialogElement && dialogInnerElement) {

			// Stops any clicks on the inner div to propagate ruining "click-outside-to-close".
			const handleInnerClick = (event: MouseEvent) => event.stopPropagation()
			// Click-outside-to-close implementation

			const handleDialogClick = (event: MouseEvent) => {
				if (!(event.target as HTMLElement).closest("#wt-inner-modal")) {
					dialogElement.close()
				}
			}

			dialogInnerElement.addEventListener("click", handleInnerClick)
			dialogElement.addEventListener("click", handleDialogClick)

			if (isOpen) {
				document.querySelector('body')?.classList.add('overflow-clip')
				dialogElement.showModal()
			} else {
				document.querySelector('body')?.classList.remove('overflow-clip')
				dialogElement.close()
			}

			// Cleanup event listeners on component unmount
			return () => {
				dialogInnerElement.removeEventListener("click", handleInnerClick)
				dialogElement.removeEventListener("click", handleDialogClick)
			}
		}
	}, [isOpen])

	return (
		<dialog ref={dialogRef} onClose={onClose} className="p-3 rounded-sm bg-paper">
			<div ref={dialogInner} className={`flex flex-col font-serif ${cormorantFont.variable} text-sm pb-2`}>
				{message}
			</div>
			<div className="flex" id="wt-inner-modal">
				{children}
			</div>
		</dialog>
	)
}

export default Modal
