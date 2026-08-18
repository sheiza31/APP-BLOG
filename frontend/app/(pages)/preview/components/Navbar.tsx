import Link from "next/link"
const Navbar = () => {
    return (
        <>
            <nav className="bg-background text-primary font-body-md text-body-md fixed top-0 w-full z-50 border-b border-outline-variant flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-300 ease-in-out">
                <div className="font-display text-headline-lg text-primary">The Monograph</div>
                <div className="hidden md:flex gap-8 items-center">
                    <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Essays</Link>
                    <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Philosophy</Link>
                    <Link className="text-secondary border-b-2 border-secondary pb-1" href="#">Design</Link>
                    <Link className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Archives</Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-on-surface-variant hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button className="bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 rounded">Subscribe</button>
                    <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant flex-shrink-0 cursor-pointer">
                        <img alt="Reader Profile" className="w-full h-full object-cover" data-alt="A small circular avatar placeholder image showing Link minimalistic abstract pattern in soft blue and grey tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHNiVhFhHMUb9rHHDD2h8mQfBWsO5hZzIcKpbXu6Zmyr3RJvHmTz3NgePpOs-IT8B6ryOYbTrQDQ2oLWtdrPNlUYtNO1Sdnph8dd6LNXawyW5Ss-XIqaycl-Ny0QEdRKMRmID-18HooevEFhLRIqbsLa2cUl5zeLTQuHhH7AchG1g9DWILS87zchpyad4EFhpJtXSpMZ_BmeR3ryLTGopwaQC1w6HXDpI3wkEyYQjVDre3aVe4MYD-" />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar