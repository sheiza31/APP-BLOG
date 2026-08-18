import Link from "next/link"
const ForgotPassword = () => {
    return (
        <>
            <div className="mb-8 text-center">
                <h1
                    style={{ fontFamily: 'var(--font-newreader)', fontVariationSettings: "'opsz' 24", fontSize: '4rem' }}
                    className="font-display text-display text-primary tracking-tight mb-2">The Insight</h1>
                <p
                style = {{fontFamily: 'var(--font-inter)'}}
                className=" text-base text-on-surface-variant">Built for deep reading.</p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#C6C6CD] rounded-lg p-8 shadow-sm">
                <h2
                 style={{fontFamily: 'var(--font-newsreader)',fontVariationSettings: "'opsz' 24"}}
                className=" text-2xl text-on-surface mb-6 text-center">Reset Your Password</h2>
                <p
                 style={{fontFamily: 'var(--font-inter)'}}
                className=" text-base  text-[#45464D] font-normal mb-6 text-center">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
                <form className="space-y-6">
                    <div> 
                        <label className="sr-only" htmlFor="email">Email address</label>
                        <input className="w-full appearance-none bg-transparent border-0 border-b border-outline text-on-surface py-stack-sm px-0 focus:outline-none focus:ring-0 focus:border-primary font-body-md text-body-md placeholder-on-surface-variant transition-colors" id="email" name="email" placeholder="Enter your email address" required type="email" />
                    </div>
                    <div className="pt-4">
                        <button className="w-full bg-black text-white rounded font-label-caps text-label-caps p-4  cursor-pointer hover:bg-surface-tint transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center gap-2" type="submit">
                            <span>Send Reset Link</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
                        </button>
                    </div>
                </form>
                <div className="mt-6.25 text-center">
                    <Link className="font-caption text-caption text-[#006A61] hover:text-secondary-fixed underline transition-all flex items-center justify-center gap-1" href="/">
                        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        Back to Login
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword