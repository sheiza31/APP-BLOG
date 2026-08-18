import Link from "next/link"
const Header = () => {
    return (
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link className="flex items-center gap-2 font-bold text-lg tracking-tight" href="#">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        The Insight
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-gray-600 hover:text-gray-900 font-medium text-sm" href="/blog">Homepages</Link>
                        <Link className="text-gray-600 hover:text-gray-900 font-medium text-sm" href="/features">Features</Link>
                        <Link className="text-gray-600 hover:text-gray-900 font-medium text-sm" href="/about">About</Link>
                        <Link className="text-gray-600 hover:text-gray-900 font-medium text-sm" href="/contacts">Contacts</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </button>
                        <Link className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-6 rounded-full transition-colors" href="#">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header