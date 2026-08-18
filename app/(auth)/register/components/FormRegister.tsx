"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormRegister = () => {
    const [FullName, setFullName] = useState<string>("")
    const [Email, setEmail] = useState<string>("")
    const [Password, setPassword] = useState<string>("")
    const [Errors, setErrors] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors("")
        setLoading(true)

        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/register", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    full_name: FullName,
                    email: Email,
                    password: Password
                })
            })

            const responseJson = await response.json();

            if (!response.ok) {
                setErrors(responseJson.message || "Registration failed")
                return
            }

            router.push("/")
        } catch (error) {
            setErrors("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-full max-w-120 bg-white p-16 md:p-stack-xl border border-[#C6C6CD] flex flex-col gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low -mr-16 -mt-16 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                <header className="flex flex-col items-center text-center gap-6 relative z-10">
                    <Link
                        style={{
                            fontFamily: "var(--font-newsreader)",
                            fontVariationSettings: '"opsz" 24'
                        }}
                        className="font-medium text-headline-lg text-[32px] 
                     tracking-tight mb-1.75 hover:opacity-80 transition-opacity" href="">The Insight</Link>
                    <h1 style={{
                        fontFamily: "var(--font-newsreader)",
                        fontVariationSettings: '"opsz" 24'
                    }}
                        className="font-medium text-2xl">Join our Community</h1>
                    <p style={{
                        fontFamily: "var(--font-inter)"
                    }} className="text-base font-normal text-[#45464D] max-w-[280px]">
                        Create an account to dive deep into our editorial content and save articles for later.
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10" method="POST">
                    {Errors && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                            {Errors}
                        </div>
                    )}
                    <div className="flex flex-col gap-2 group">
                        <label className="font-label-caps text-sm text-on-surface-variant group-focus-within:text-secondary transition-colors uppercase" htmlFor="fullName">Full Name</label>
                        <input
                            style={{ fontFamily: "var(--font-inter)" }}
                            className="p-3 font-semibold text-body-md text-[#45464D]"
                            id="fullName"
                            name="fullName"
                            placeholder="Jane Doe"
                            value={FullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required type="text" />
                    </div>
                    <div className="flex flex-col gap-2 group">
                        <label className="font-label-caps text-sm text-on-surface-variant group-focus-within:text-secondary transition-colors uppercase" htmlFor="email">Email Address</label>
                        <input
                            style={{ fontFamily: "var(--font-inter)" }}
                            className="p-3 font-semibold text-body-md text-[#45464D]"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required type="email" />
                    </div>
                    <div className="flex flex-col gap-2 group relative">
                        <label className="font-label-caps text-sm text-on-surface-variant group-focus-within:text-secondary transition-colors uppercase" htmlFor="password">Password</label>
                        <input
                            style={{ fontFamily: "var(--font-inter)" }}
                            className="p-3 font-semibold text-body-md text-[#45464D] pr-10"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required type="password" />
                    </div>
                    <button
                        disabled={loading}
                        style={{ fontFamily: "var(--font-inter)" }}
                        className="mt-2 bg-black text-white w-full font-label-caps text-label-caps uppercase py-4 rounded-lg hover:bg-on-surface transition-colors duration-300 ease-in-out active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
                <footer className="text-center font-caption text-caption text-on-surface-variant mt-stack-md relative z-10">
                    Already have an account?
                    <Link className="text-[#006A61] hover:text-secondary-fixed-dim hover:underline underline-offset-4 decoration-1 transition-all" href="/">Log in</Link>
                </footer>
            </div>
        </>
    )
}
export default FormRegister
