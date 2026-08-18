import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant dark:border-outline bg-surface-container-low dark:bg-surface-container-lowest flex flex-col h-full p-stack-md z-20">
                <div className="mb-stack-lg flex items-center gap-stack-sm px-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-variant flex-shrink-0">
                        <img alt="The Insight Admin Logo" className="w-full h-full object-cover" data-alt="A small circular avatar logo for 'The Insight Admin', featuring Link clean, minimalist geometric design in dark charcoal and off-white. The logo is suitable for Link premium editorial platform. Light mode aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUen17ZviTUQm5FUjJxqsKruICPDPdDdhq5f1Jijh22WFZMQz8uNaU3LqURpT_xkRvRb81gg-MPxfbT0gp8TeGmh9nm-KWVv_lz1WuKA1NPs6qoTbgl0conViNX6vDyMTJGbafHopa5S3YiO5nAsMogqQArhNHXlTtNfsymF_NBONEYNXRuTVJn7YaRZUSkeY1F4weWMBWO9VuxTUSrseYs7NPzGmu41rI89OYCdi5PdKsb4GJDxSx" />
                    </div>
                    <div>
                        <h1 className="font-display text-headline-md text-primary dark:text-on-primary-fixed leading-none">The Insight</h1>
                        <span className="font-caption text-caption text-on-surface-variant">Editorial Admin</span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto space-y-stack-xs font-body-md text-body-md font-label-caps text-label-caps">
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/dashboard/admin">
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        Dashboard
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg duration-200 ease-in-out" href="/article">
                        <span className="material-symbols-outlined" data-icon="description">description</span>
                        Articles
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/categories">
                        <span className="material-symbols-outlined" data-icon="category">category</span>
                        Categories
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/media">
                        <span className="material-symbols-outlined" data-icon="perm_media">perm_media</span>
                        Media
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors duration-200 ease-in-out rounded-lg" href="/settings">
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar