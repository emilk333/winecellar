'use client'

import { aleoFont } from "@/app/util/font/fonts"

export default function SignUpPage() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4">
            <div className={`${aleoFont.className} font-sans text-1xl pb-6`}>
                Please verify your email to finish account setup.
            </div>
            <a href="/login">Go to login</a>
        </div>
    )
}