"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormLogin = () => {
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
            const response = await fetch("http://localhost:8080/api/v1/auth/login", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    email: Email,
                    password: Password
                })
            })

            const responseJson = await response.json();

            if (!response.ok) {
                setErrors(responseJson.message || "Login failed")
                return
            }

            const user = responseJson.user
            localStorage.setItem("user", JSON.stringify(user))

            if (user.role === "admin") {
                router.push(`/dashboard/${user.full_name}`)
            } else {
                router.push("/blog")
            }
        } catch (error) {
            setErrors("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="w-full max-w-100">
                <div className="text-center mb-8">
                    <h1
                        style={{
                            fontFamily: "var(--font-newsreader)",
                            fontVariationSettings: '"opsz" 24',
                        }} className="text-[40px] font-semibold text-primary tracking-tight mb-stack-sm">The Insight</h1>
                    <h2
                        style={{
                            fontFamily: "var(--font-newsreader)",
                            fontVariationSettings: '"opsz" 24',
                        }} className="text-2xl font-medium text-on-surface">Welcome Back</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {Errors && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                            {Errors}
                        </div>
                    )}
                    <div>
                        <label
                            style={{ fontFamily: "var(--font-inter)" }}
                            className="text-[12px] block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase" htmlFor="email">Email Address</label>
                        <input
                            className="w-full px-3 py-3  bg-transparent border border-outline-variant focus:border-secondary focus:ring-0  font-body-md text-body-md text-on-surface transition-colors"
                            id="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            placeholder="Enter your email"
                            required type="email" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label
                                style={{ fontFamily: "var(--font-inter)" }}
                                className="text-[12px] block font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="password">Password</label>
                            <Link
                                style={{ fontFamily: "var(--font-inter)" }}
                                className="text-sm text-[#006A61] hover:underline transition-all" href="forgot-password">Forgot Password?</Link>
                        </div>
                        <input
                            className="w-full px-3 py-3  bg-transparent border border-outline-variant focus:border-secondary focus:ring-0  font-body-md text-body-md text-on-surface transition-colors"
                            id="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="Enter your password"
                            required type="password" />
                    </div>
                    <div className="">
                        <button
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 bg-black text-white cursor-pointer text-[12px] font-bold focus:ring-primary focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
                <div className="mt-8 text-center">
                    <p className="font-caption text-caption text-on-surface-variant">
                        Don&apos;t have an account?
                        <Link className="text-[#006A61] hover:underline transition-all font-bold" href="/register">Create an account</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default FormLogin
