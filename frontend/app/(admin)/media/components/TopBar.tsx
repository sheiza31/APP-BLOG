const TopBar = () => {
    return (
        <>
            <header className="bg-surface flex justify-between items-center h-16 px-stack-lg w-full sticky top-0 border-b border-outline-variant z-10">
                <div className="flex-1"></div>
                <div className="flex items-center gap-4">
                    <button aria-label="Notifications" className="text-outline hover:text-secondary transition-colors duration-200">
                        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                    </button>
                    <button aria-label="Account" className="text-outline hover:text-secondary transition-colors duration-200">
                        <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                    </button>
                </div>
            </header>
        </>
    )
}
export default TopBar