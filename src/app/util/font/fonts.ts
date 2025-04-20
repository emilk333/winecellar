import { Cormorant, Rubik } from "next/font/google"
import localFont from "next/font/local"

const oldLondonFont = localFont({
    src: "./../../../../public/font/OldLondon.ttf",
    variable: "--font-old-london"
})

const cormorantFont = Cormorant({
	variable: "--font-cormorant",
    weight: "400"
})

const rubikFont = Rubik({
	variable: "--font-rubik",
})


export { oldLondonFont, cormorantFont, rubikFont }