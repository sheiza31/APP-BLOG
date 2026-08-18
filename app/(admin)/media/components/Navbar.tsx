import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col p-stack-md z-20">
                <div className="mb-stack-lg">
                    <h1 className="font-display text-headline-md text-primary">The Insight</h1>
                    <p className="font-body-md text-caption text-on-surface-variant">Editorial Admin</p>
                </div>
                <ul className="flex flex-col gap-2 font-body-md text-body-md">
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="/dashboard/admin">
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="/article">
                            <span className="material-symbols-outlined" data-icon="description">description</span>
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="/categories">
                            <span className="material-symbols-outlined" data-icon="category">category</span>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg duration-200 ease-in-out" href="#">
                            <span className="material-symbols-outlined" data-icon="perm_media" data-weight="fill" style={{ fontVariationSettings: 'FILL 1' }}>perm_media</span>
                            Media
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg mt-auto" href="#">
                            <span className="material-symbols-outlined" data-icon="settings">settings</span>
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default Navbar