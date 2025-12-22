"use client"

import { useFormStatus } from "react-dom"
import { Spinner } from "../loading/Spinner"
import { aleoFont } from "@/app/util/font/fonts"

interface SubmitButtonProps {
    formAction: (formData: FormData) => void | Promise<void>
    children: React.ReactNode
    styling?: string
    disabled?: boolean
}

export function SubmitButton({ formAction, children, styling = "", disabled = false }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    
    return (
        <button 
            className={`${aleoFont.variable} pl-1 font-sans text-sm mt-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${styling}`}
            formAction={formAction}
            disabled={pending || disabled}
        >
            {pending ? 
                <div className="flex gap-2">
                    <Spinner/>
                    {children}
                </div>
            : children}
        </button>
    )
}