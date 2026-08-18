import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline h-screen w-64 fixed left-0 top-0 flex flex-col h-full p-stack-md hidden md:flex z-40">
                <div className="mb-stack-lg flex items-center gap-stack-md">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-display">
                        TI
                    </div>
                    <div>
                        <h1 className="font-display text-headline-md text-primary dark:text-on-primary-fixed m-0 leading-none">The Insight</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant m-0 mt-stack-xs">Editorial Admin</p>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-stack-sm">
                        <li>
                            <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg font-body-md text-body-md font-label-caps text-label-caps duration-200 ease-in-out" href="/dashboard/admin">
                                <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors font-body-md text-body-md font-label-caps text-label-caps duration-200 ease-in-out" href="/article">
                                <span className="material-symbols-outlined" data-icon="description">description</span>
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors font-body-md text-body-md font-label-caps text-label-caps duration-200 ease-in-out" href="/categories">
                                <span className="material-symbols-outlined" data-icon="category">category</span>
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors font-body-md text-body-md font-label-caps text-label-caps duration-200 ease-in-out" href="/media">
                                <span className="material-symbols-outlined" data-icon="perm_media">perm_media</span>
                                Media
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mt-auto pt-stack-md border-t border-outline-variant">
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors font-body-md text-body-md font-label-caps text-label-caps duration-200 ease-in-out" href="/settings">
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar