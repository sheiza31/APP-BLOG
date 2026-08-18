import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full py-stack-lg border-b border-outline-variant flex justify-center bg-surface">
            <Link
                className="font-display text-headline-lg text-primary tracking-tight hover:opacity-80 transition-opacity"
                href="#"
            >
                The Insight
            </Link>
        </header>
    )
}

export default Header