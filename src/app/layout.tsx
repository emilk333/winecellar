import type { Metadata } from "next"
import "./globals.css"
import { cormorantFont } from "./util/font/fonts"

export const metadata: Metadata = {
	title: "Wine list",
	description: "",
}

export default function RootLayout({
	children,
	modal,
}: Readonly<{ children: React.ReactNode, modal: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${cormorantFont.variable} font-serif antialiased bg-paper-400`}>
				{modal}
				{children}
			</body>
		</html>
	)
}
