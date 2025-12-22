import localFont from "next/font/local"

const aleoFont = localFont({
    src: "./../../../../public/font/aleo/Aleo-VariableFont_wght.ttf",
    preload: true,
    variable: "--font-aleo"
})

const oldLondonFont = localFont({
    src: "./../../../../public/font/OldLondon.ttf",
    preload: false,
    variable: "--font-old-london"
})


export { oldLondonFont, aleoFont }