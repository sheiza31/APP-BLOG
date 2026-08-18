import Link from "next/link"
const Footer = () => {
    return (
        <>
            <footer className="w-full py-stack-xl mt-section-gap border-t border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest">
                <div className="max-w-max-content-width mx-auto flex flex-col items-center gap-stack-md text-center">
                    <Link className="font-display text-headline-md text-primary opacity-100 hover:opacity-80 transition-opacity" href="#">
                        The Insight
                    </Link>
                    <nav className="flex flex-wrap justify-center gap-stack-md">
                        <Link className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:underline hover:text-secondary opacity-100 hover:opacity-80 transition-opacity" href="#">Privacy Policy</Link>
                        <Link className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:underline hover:text-secondary opacity-100 hover:opacity-80 transition-opacity" href="#">Terms of Service</Link>
                        <Link className="font-caption text-caption text-on-surface-variant dark:text-on-surface-variant hover:underline hover:text-secondary opacity-100 hover:opacity-80 transition-opacity" href="#">Newsletter</Link>
                        <Link className="font-caption text-caption text-primary dark:text-on-background underline opacity-100 hover:opacity-80 transition-opacity" href="#">About</Link>
                    </nav>
                    <p className="font-caption text-caption text-on-surface-variant mt-stack-sm">
                        © 2024 The Insight. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer