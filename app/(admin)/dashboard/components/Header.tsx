const Header = () => {
    return (
        <>
            <header className="bg-surface dark:bg-background border-b border-outline-variant dark:border-outline flex justify-between items-center h-16 px-stack-lg w-full sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <button className="md:hidden text-on-surface">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-outline">search</span>
                        <input className="bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 pl-10 pr-4 py-2 font-body-md text-body-md text-on-surface placeholder:text-outline-variant transition-colors duration-200 w-64" placeholder="Search..." type="text" />
                    </div>
                    <button className="text-outline dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 p-2">
                        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    </button>
                    <button className="text-outline dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 p-2">
                        <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                    </button>
                </div>
            </header>
        </>
    )
}
export default Header