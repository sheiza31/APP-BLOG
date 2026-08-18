const TopAppBar = () => {
    return (
        <>
            <header className="bg-surface dark:bg-background text-primary dark:text-on-primary-fixed font-headline-md text-headline-md font-body-md text-body-md docked full-width top sticky ml-64 flex justify-between items-center h-16 px-stack-lg w-full border-b border-outline-variant dark:border-outline z-10" style={{ marginLeft: 0, width: "100%" }}>
                <div className="flex-1 flex justify-start pl-4">
                    <div className="relative w-64">
                        <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline-variant" data-icon="search">search</span>
                        <input className="w-full custom-input pl-8 font-body-md text-body-md text-primary placeholder-outline" placeholder="Search settings..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-6 pr-4">
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
export default TopAppBar