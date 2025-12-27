"use client"

import { aleoFont } from "@/app/util/font/fonts"
import { FC } from "react"

export type CheckboxProps = {
	attributes?: {
		required: boolean,
		name: string,
		type: string,
		label: string
	}
	id: string,
	callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<CheckboxProps> = ({ 
	attributes,
	id,
	callback
}) => {
	return (
		<div className="flex items-center mb-4 pr-4">
			<input
				id={id.toLowerCase()}
				value=""
				type="checkbox"
				className={`w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft`}
				onChange={(e) => {
					if (callback) callback(e)
				}}
				name={id.toLowerCase()}
			/>
			<label htmlFor={id.toLowerCase()} className={`font-body ${aleoFont.className} font-sans text-sm select-none ms-2`}>
				{attributes?.label}
			</label>
		</div>
	)
}
