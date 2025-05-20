import { SimpleError } from "@/types/generalTypes"
import { FC } from "react"
import { oldLondonFont } from "../util/font/fonts"


export const ErrorTemplate: FC<SimpleError> = (error) => {
    
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className={`${oldLondonFont.variable} font-old-london text-4xl`}>
                Something went wrong
            </h1>
            <p>{error.message}</p>
        </div>
    )
}