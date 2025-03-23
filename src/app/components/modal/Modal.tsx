import { FC, ReactNode, useRef } from "react"

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	message: string
}

const Modal: FC<ModalProps> = ({isOpen, onClose, children, message}) => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const dialogInner = useRef<HTMLDivElement>(null)

	if (dialogRef.current && dialogInner.current) {

		// Stops any clicks on the inner div to propagate ruining "click-outside-to-close". 
		dialogInner.current.addEventListener('click', (event) => {
			event.stopPropagation()
		})
		
		// Click-outside-to-close implementation
		dialogRef.current.addEventListener('click', (event) => {
			if ((event.target as HTMLElement).id !== 'wt-inner-modal') {
				dialogRef.current!!.close()
			}
		})

		if (isOpen) {
			dialogRef.current.showModal()
		} else {
			dialogRef.current.close()
		}
	}

	return (
		<dialog ref={dialogRef} onClose={onClose}>
			<div ref={dialogInner}>
				{message}
			</div>
			{children}
		</dialog>
	)
}

export default Modal
