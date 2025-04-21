export default function TimesIcon({ color }: { color: string }) {
	return (
		<div className="h-2 w-2 pt-[1px] inline-block">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={color}
				viewBox="0 0 20 20"
				fill="none">
				<g clipPath="url(#clip0_1376_9)">
					<rect
						y="2.82837"
						width="4"
						height="24"
						transform="rotate(-45 0 2.82837)"
					/>
					<rect
						x="16.9706"
						width="4"
						height="24"
						transform="rotate(45 16.9706 0)"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1376_9">
						<rect width="20" height="20" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}
