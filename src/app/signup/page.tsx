'use client'

import { useState } from "react"
import { SubmitButton } from "../components/button/SubmitButton"
import { Input } from "../components/input/Input"
import { signup } from "../login/actions"
import { oldLondonFont } from "../util/font/fonts"

export default function SignUpPage() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const inputAttrPassword = {
        type: "password",
        name: "password",
        label: "Password",
        required: true
    }

    const inputAttrPasswordConfirm = {
        type: "password",
        name: "confirm-password",
        label: "Confirm password",
        required: true
    }

    const inputAttrEmail = {
        type: "email",
        name: "email",
        label: "Email",
        required: true
    }

    const checkPasswordMatch = () => {
        // weak comparison for upper and lowercase check
        return (password == confirmPassword) && password.length && confirmPassword.length 
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center px-4">
            <h1 className={`${oldLondonFont.variable} font-old-london text-5xl pb-1`}>Sign up</h1>
            <article className="max-w-[400px] mt-6">
                <form>
                    <Input
                        message={""}
                        id={inputAttrEmail.name}
                        displayLable={true}
                        attributes={inputAttrEmail}
                    />  
                    <Input
                        message={""}
                        id={inputAttrPassword.name}
                        displayLable={true}
                        attributes={inputAttrPassword}
                        callback={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        message={""}
                        id={inputAttrPasswordConfirm.name}
                        displayLable={true}
                        attributes={inputAttrPasswordConfirm}
                        callback={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="flex justify-between mt-2">
                        <SubmitButton formAction={signup} disabled={!checkPasswordMatch()}>Sign up</SubmitButton>
                    </div>
                </form>
            </article>
        </div>
    )
}