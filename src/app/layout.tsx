import type { Metadata } from "next"
import "./globals.css"
import { cormorantFont } from "./util/font/fonts"

export const metadata: Metadata = {
	title: "Wine list",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${cormorantFont.variable} font-serif antialiased bg-paper`}>
				{children}
			</body>
		</html>
	)
}
