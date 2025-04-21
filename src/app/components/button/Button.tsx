"use client"

import { FC, useState } from "react"
import { Spinner } from "../loading/Spinner"
import React from "react"
import { rubikFont } from "@/app/util/font/fonts"

export interface ButtonProps {
	name: string | React.JSX.Element,
	styling: string,
	stripStyling: boolean,
	callback: () => void
}

export const Button: FC<ButtonProps> = (buttonConfig) => {
	const [isLoading, setLoading] = useState(false)

	const handleCallback = async () => {
		setLoading(() => true)
		await buttonConfig.callback()
		setLoading(() => false)
	}

	const loading = () => {
		return(
			<React.Fragment>
				<Spinner />
				<span className="pl-1.5">Loading...</span>
			</React.Fragment>
		)
	}

	const styling = buttonConfig.stripStyling ? "" : `${buttonConfig.styling} ${rubikFont.variable} justify-center py-0.5 px-3 text-gray-900 rounded-sm inline-flex items-center`

	return (
		<button onClick={handleCallback} className={styling} disabled={isLoading}>
			{isLoading ? loading() : buttonConfig?.name}
		</button>
	)
}
