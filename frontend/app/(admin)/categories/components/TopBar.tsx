const TopBar = () => {
    return (
        <>
            <header className="docked full-width top sticky ml-64 border-b border-outline-variant dark:border-outline bg-surface dark:bg-background flat no shadows z-10 flex justify-between items-center h-16 px-stack-lg w-[calc(100%-16rem)]">
                <div className="flex items-center">
                    <span className="font-display text-headline-md text-primary dark:text-on-primary-fixed">The Insight</span>
                </div>
                <div className="flex items-center gap-stack-md">
                    <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline" data-icon="search">search</span>
                        <input className="pl-10 pr-4 py-2 bg-transparent border-b border-outline-variant focus:border-secondary focus:ring-0 focus:outline-none font-body-md text-body-md text-on-surface w-64 transition-colors" placeholder="Search..." type="text" />
                    </div>
                    <button className="text-outline dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200">
                        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    </button>
                    <button className="text-outline dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200">
                        <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                    </button>
                </div>
            </header>
        </>
    )
}
export default TopBar