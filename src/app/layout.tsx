import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Wine list",
	description: "",
}

export default function RootLayout({
	children,
	modal,
}: any) {
	return (
		<html lang="en">
			<body className={`antialiased bg-paper-100`}>
				{modal}
				{children}
			</body>
		</html>
	)
}
