"use client"

export default function Button(buttonConfig : any) {
	return (
		<button onClick={() => buttonConfig?.callback()}>
			{buttonConfig?.name}
		</button>
	)
}
