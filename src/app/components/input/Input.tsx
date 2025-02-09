"use client"

export default function Input({ message, id }: any) {
	return (
		<div className="relative">
			<label htmlFor="search" className="">
				{id}
			</label>
			<input
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={message}
				name={id}
			/>
		</div>
	)
}
