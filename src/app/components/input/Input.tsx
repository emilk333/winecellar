"use client"

import { aleoFont } from "@/app/util/font/fonts"
import { FC } from "react"

export type InputProps = {
	attributes?: {
		required: boolean,
		name: string,
		type: string,
		label: string
	}
	message: number | string | null,
	defaultValue?: string,
	id: string,
	callback?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	displayLable: boolean,
	value?: string | number
}

export const Input: FC<InputProps> = ({ 
	attributes,
	message, 
	defaultValue, 
	id,
	callback,
	displayLable,
	value,
}) => {
	return (
		<div className="w-full">
			<label htmlFor={id.toLowerCase()} className={`${displayLable ? "" : "sr-only"} ${aleoFont.className} font-sans text-sm `}>
				{attributes?.label}
			</label>
			<input
				id={id.toLowerCase()}
				value={value}
				type={attributes?.type}
				className={`${aleoFont.className} font-sans text-sm w-full bg-transparent placeholder-gray-500 placeholder:text-sm font-sans text-sm border border-gray-400 rounded-sm px-3 py-2.5 transition duration-300 ease focus:outline-none focus:border-paper-800 hover:border-paper-800 focus:shadow`}
				placeholder={message?.toString()}
				onChange={(e) => {
					if (callback) callback(e)
				}}
				name={id.toLowerCase()}
				defaultValue={defaultValue ? defaultValue: ""}
			/>
		</div>
	)
}
