'use client'

import { SubmitButton } from "../components/button/SubmitButton"
import { Input } from "../components/input/Input"
import { oldLondonFont } from "../util/font/fonts"
import { login, signup } from "./actions"

export default function LoginPage() {
    const inputAttrPassword = {
        type: "password",
        name: "password",
        label: "Password",
        required: true
    }

    const inputAttrEmail = {
        type: "email",
        name: "email",
        label: "Email",
        required: true
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4">
            <h1 className={`${oldLondonFont.variable} font-old-london text-5xl pb-1`}>Sign in</h1>
            <article className="max-w-[400px] mt-6">
                <form>
                    <Input
                        message={""}
                        id="Email"
                        displayLable={true}
                        attributes={inputAttrEmail}
                    />  
                    <Input
                        message={""}
                        id="Password"
                        displayLable={true}
                        attributes={inputAttrPassword}
                    />
                    <div className="flex justify-between mt-2">
                        <a href="/signup">Sign up</a>
                        <SubmitButton formAction={login}>Log in</SubmitButton>
                    </div>
                </form>
            </article>
        </div>
    )
}