"use client"

import { FC } from "react"

export type InputProps = {
	message: number | string | null,
	defaultValue?: string,
	id: string,
	callback?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ message, defaultValue, id, callback}) => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="sr-only">
				{id}
			</label>
			<input
				className="w-full bg-transparent placeholder:text-black font-sans text-sm border border-paper-600 rounded-sm px-3 py-2 transition duration-300 ease focus:outline-none focus:border-paper-800 hover:border-paper-800 shadow-sm focus:shadow"
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
