"use client"

import { rubikFont } from "@/app/util/font/fonts"
import { FC } from "react"

export type InputProps = {
	message: number | string | null,
	defaultValue?: string,
	id: string,
	callback?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	displayLable: boolean
}

export const Input: FC<InputProps> = ({ 
	message, 
	defaultValue, 
	id,
	callback,
	displayLable
}) => {
	return (
		<div className="w-full py-1">
			<label htmlFor={id} className={`${displayLable ? "" : "sr-only"} ${rubikFont.className} font-sans text-sm `}>
				{id}
			</label>
			<input
				className={`${rubikFont.className} font-sans text-sm w-full bg-transparent placeholder-gray-500 placeholder:text-sm font-sans text-sm border border-paper-600 rounded-sm px-3 py-2.5 transition duration-300 ease focus:outline-none focus:border-paper-800 hover:border-paper-800 shadow-sm focus:shadow`}
				placeholder={message?.toString()}
				onChange={(e) => {
					if (callback) callback(e)
				}}
				name={id}
				defaultValue={defaultValue ? defaultValue: ""}
			/>
		</div>
	)
}
