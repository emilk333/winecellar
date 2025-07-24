import { Cormorant, Rubik } from "next/font/google"
import localFont from "next/font/local"

const oldLondonFont = localFont({
    src: "./../../../../public/font/OldLondon.ttf",
    preload: false,
    variable: "--font-old-london"
})

const cormorantFont = Cormorant({
	variable: "--font-cormorant",
    preload: false,
    weight: "400"
})

const rubikFont = Rubik({
	variable: "--font-rubik",
    preload: false,
})


export { oldLondonFont, cormorantFont, rubikFont }