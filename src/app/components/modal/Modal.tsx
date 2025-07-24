import { rubikFont } from "@/app/util/font/fonts"
import { FC, ReactNode, useEffect, useRef } from "react"

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	message: string,
	childStyles: string
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, message, childStyles}) => {
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
		<dialog ref={dialogRef} onClose={onClose} className="px-5 py-7 rounded-sm bg-paper-400 max-w-xl">
			<div ref={dialogInner} className={`flex flex-col font-serif ${rubikFont.className} font-sans text-2xl pb-6`}>
				{message}
			</div>
			<div className={`flex lg:space-y-0 space-y-3 ${childStyles}`} id="wt-inner-modal">
				{children}
			</div>
		</dialog>
	)
}

export default Modal
