import Link from "next/link";

const FormLogin = () => {
    return (
        <>
            <div className="w-full max-w-[400px]">
                <div className="text-center mb-stack-lg">
                    <h1 className="font-display text-headline-lg text-primary tracking-tight mb-stack-sm">The Insight</h1>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Welcome Back</h2>
                </div>
                <form className="space-y-stack-md">
                    <div>
                        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-stack-xs uppercase" for="email">Email Address</label>
                        <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-stack-sm font-body-md text-body-md text-on-surface transition-colors" id="email" name="email" placeholder="Enter your email" required="" type="email" />
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline mb-stack-xs">
                            <label className="block font-label-caps text-label-caps text-on-surface-variant uppercase" for="password">Password</label>
                            <Link className="font-caption text-caption text-secondary hover:underline transition-all" href="#">Forgot Password?</Link>
                        </div>
                        <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-stack-sm font-body-md text-body-md text-on-surface transition-colors" id="password" name="password" placeholder="Enter your password" required="" type="password" />
                    </div>
                    <div className="flex items-center pt-stack-xs">
                        <input className="h-4 w-4 rounded border-outline text-secondary focus:ring-secondary focus:ring-offset-background bg-transparent" id="remember-me" name="remember-me" type="checkbox" />
                        <label className="ml-2 block font-caption text-caption text-on-surface-variant" for="remember-me">Keep me logged in</label>
                    </div>
                    <div className="pt-stack-md">
                        <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background" type="submit">
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-stack-lg text-center">
                    <p className="font-caption text-caption text-on-surface-variant">
                        Don't have an account?
                        <Link className="text-secondary hover:underline transition-all font-bold" href="#">Create an account</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default FormLogin