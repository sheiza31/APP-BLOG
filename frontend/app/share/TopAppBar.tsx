import Link from "next/link"
const TopAppBar = () => {
    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant transition-colors duration-200">
                <div className="max-w-max-content-width mx-auto flex justify-between items-center px-stack-md py-stack-md">
                    <Link className="font-display text-headline-lg text-primary dark:text-on-background cursor-pointer active:opacity-70 transition-opacity" href="#">
                        The Insight
                    </Link>
                    <nav className="hidden md:flex items-center gap-stack-lg">
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Essays</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Philosophy</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Design</Link>
                        <Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Archives</Link>
                    </nav>
                    <div className="flex items-center gap-stack-md">
                        <button className="text-on-surface-variant hover:text-secondary transition-colors duration-200 flex items-center justify-center p-stack-xs">
                            <span className="material-symbols-outlined" data-icon="search">search</span>
                        </button>
                        <button className="bg-primary text-on-primary font-label-caps text-label-caps px-stack-md py-stack-sm rounded hover:opacity-90 transition-opacity cursor-pointer active:opacity-70 uppercase tracking-widest">
                            Subscribe
                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}
export default TopAppBar