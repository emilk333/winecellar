"use client"

import { FC } from "react"

export interface ButtonProps {
	name: string,
	callback: () => void
}

export const Button: FC<ButtonProps> = (buttonConfig) => {
	return (
		<button onClick={() => buttonConfig?.callback()}>
			{buttonConfig?.name}
		</button>
	)
}
