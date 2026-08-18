const Header = () => {
    return (
        <>
            <header className="docked full-width top sticky bg-surface dark:bg-background border-b border-outline-variant dark:border-outline flex justify-between items-center h-16 px-stack-lg w-full z-10">
                <div className="flex-1 flex justify-end">
                    <div className="flex items-center gap-stack-md text-outline dark:text-outline-variant duration-200">
                        <button className="hover:text-secondary dark:hover:text-secondary-fixed transition-colors">
                            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                        </button>
                        <button className="hover:text-secondary dark:hover:text-secondary-fixed transition-colors">
                            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header