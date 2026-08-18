import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant dark:border-outline bg-surface-container-low dark:bg-surface-container-lowest z-10 flex flex-col h-full p-stack-md flat no shadows">
            <div className="mb-stack-xl flex items-center gap-3">
                <img alt="The Insight Admin Logo" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTfSMqq9ukPLaKPC50G-dJN35Ev1GyWiJQrBbaRrIIfiXgu2HaMI0CzqlfgcZj0gjvdR1b0qOBrBTBxfJhs06sZEvMlW1DHxyD_pu5BgJzIEK4UUOhnOqxjLkg93sLmDKGJVEDhJ4nSIjg8AvsdxqCnIJ_aijH-tfFniy7g3j7_uH36fb6SS79aTZcrs8K2Sg_SC_R6Ay7fNlL_VGVTelmU8vVISluiFg4Yrh4LKf7VciI0AuOj92A" />
                <div>
                    <h1 className="font-display text-headline-md text-primary dark:text-on-primary-fixed">The Insight</h1>
                    <p className="font-caption text-caption text-on-surface-variant">Editorial Admin</p>
                </div>
            </div>
            <ul className="space-y-stack-sm flex-1 font-body-md text-body-md font-label-caps text-label-caps">
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
                    <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg duration-200 ease-in-out" href="/posts">
                        <span className="material-symbols-outlined" data-icon="article">article</span>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/media">
                        <span className="material-symbols-outlined" data-icon="perm_media">perm_media</span>
                        Media
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/settings">
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
