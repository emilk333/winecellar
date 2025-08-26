import { Input } from "../components/input/Input"
import { oldLondonFont, rubikFont } from "../util/font/fonts"
import { login, signup } from "./actions"

export default function LoginPage() {

	const inputAttrPassword = {
		type: "password",
        name: "password",
        required: true
	}

    const inputAttrEmail = {
		type: "email",
        name: "email",
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
                        <button className={`${rubikFont.variable} pl-1 font-sans text-sm mt-0.5`} formAction={login}>Log in</button>
                        <button className={`${rubikFont.variable} pl-1 font-sans text-sm mt-0.5`} formAction={signup}>Sign up</button>
                    </div>
                </form>
            </article>
        </div>
	)
}
