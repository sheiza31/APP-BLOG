import Link from "next/link"

const ResetPassword = () => {
    return (
        <div className="w-full max-w-md flex flex-col gap-stack-lg">
            {/* Title */}
            <div className="text-center space-y-stack-xs">
                <h1 className="font-display text-headline-lg text-primary">Reset Password</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                    Please enter a new password to secure your account.
                </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-stack-md">
                {/* New Password */}
                <div className="flex flex-col gap-stack-xs">
                    <label
                        className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest"
                        htmlFor="new_password"
                    >
                        New Password
                    </label>
                    <div className="relative">
                        <input
                            className="w-full bg-transparent border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary px-3 py-3 transition-colors pr-10"
                            id="new_password"
                            minLength={8}
                            placeholder="Enter new password"
                            required
                            type="password"
                        />
                        <button
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                            type="button"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "20px" }} id="icon_new">
                                visibility
                            </span>
                        </button>
                    </div>
                    <ul className="font-caption text-caption text-on-surface-variant mt-0.5 space-y-1">
                        <li className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-secondary" style={{ fontSize: "16px" }}>
                                check_circle
                            </span>
                            At least 8 characters
                        </li>
                    </ul>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-stack-xs">
                    <label
                        className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest"
                        htmlFor="confirm_password"
                    >
                        Confirm New Password
                    </label>
                    <div className="relative">
                        <input
                            className="w-full bg-transparent border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary px-3 py-3 transition-colors pr-10"
                            id="confirm_password"
                            minLength={8}
                            placeholder="Confirm new password"
                            type="password"
                        />
                        <button
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                            type="button"
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "20px" }} id="icon_confirm">
                                visibility
                            </span>
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    className="w-full mt-stack-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest py-4 hover:bg-primary/90 transition-colors duration-200"
                    type="submit"
                >
                    Reset Password
                </button>
            </form>

            {/* Success message (hidden by default) */}
            <div
                className="hidden text-center flex flex-col items-center gap-stack-md py-stack-md"
                id="success-message"
            >
                <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontSize: "48px", fontVariationSettings: "'FILL' 1" }}
                >
                    check_circle
                </span>
                <div className="space-y-stack-xs">
                    <h2 className="font-display text-headline-md text-primary">Password Updated</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Your password has been successfully reset.
                    </p>
                </div>
                <a
                    className="inline-block mt-stack-sm bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest py-3 px-8 hover:bg-primary/90 transition-colors duration-200"
                    href="#"
                >
                    Go to Login
                </a>
            </div>

            {/* Back to Login */}
            <div className="text-center">
                <Link
                    className="font-body-md text-body-md text-secondary hover:text-on-secondary-container transition-colors inline-flex items-center gap-2 group"
                    href="/"
                >
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform" style={{ fontSize: "18px" }}>
                        arrow_back
                    </span>
                    Back to Login
                </Link>
            </div>
        </div>
    )
}

export default ResetPassword