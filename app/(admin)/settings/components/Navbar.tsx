import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-on-primary-fixed font-body-md text-body-md font-label-caps text-label-caps h-screen w-64 fixed left-0 top-0 border-r border-outline-variant dark:border-outline flex flex-col h-full p-stack-md z-20">
                <div className="mb-stack-lg flex flex-col items-start px-4 mt-6">
                    <span className="font-display text-headline-md text-primary dark:text-on-primary-fixed">The Insight</span>
                    <span className="font-caption text-caption text-on-surface-variant">Editorial Admin</span>
                </div>
                <ul className="flex-1 flex flex-col gap-2">
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/dashboard/admin">
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/article">
                            <span className="material-symbols-outlined" data-icon="description">description</span>
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/categories">
                            <span className="material-symbols-outlined" data-icon="category">category</span>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/media">
                            <span className="material-symbols-outlined" data-icon="perm_media">perm_media</span>
                            Media
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg duration-200 ease-in-out" href="/settings">
                            <span className="material-symbols-outlined" data-icon="settings">settings</span>
                            Settings
                        </Link>
                    </li>
                </ul>
                <div className="mt-auto px-4 pb-6 flex items-center gap-3">
                    <img alt="The Insight Admin Logo" className="w-10 h-10 rounded-full object-cover grayscale" data-alt="A small, circular avatar portrait of an administrative user. High-contrast, black and white aesthetic, minimal background, professional lighting. The face is clearly defined, conveying competence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwJByUYQAcwhtomyZE2LpfhMlmvORzD40lzk9Tamise6FwlKChDw09NGdCl-FsJa-7rHwC9HfEsVpvRvoQxdRg-jhNiZ0Y5rO_Ql5ixm3aah6w-660JUT4uzO6kyZw4Y_Uh50iWByd9EuarzT9czRkjRcv6vGsSfbzw123yrig5h633_izg2pdHgwr0C3p-UZv8IOEtbJm-B5JGkXc4q6-jtgwXSwx5I9hmgzC3pXAWoSDxYNIJIwt" />
                    <div className="flex flex-col">
                        <span className="font-label-caps text-label-caps text-primary">Admin User</span>
                        <span className="font-caption text-caption text-on-surface-variant">Log out</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar