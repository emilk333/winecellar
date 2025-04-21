export default function DotMenu({ color }: { color: string }) {
	return (
		<div className="h-3 w-3 inline-block">
			<svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 16 16" >
				<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
			</svg>
		</div>
	)
}

