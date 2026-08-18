const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t border-gray-100 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to our Newsletter</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
                    <form className="max-w-md mx-auto mb-4 flex">
                        <input className="flex-1 bg-gray-50 border border-gray-200 rounded-l-full px-6 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Enter Your Email" type="email" />
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-r-full transition-colors" type="submit">Subscribe</button>
                    </form>
                    <p className="text-xs text-gray-400 mb-16">Pure inspiration, zero spam 💫</p>
                    <div className="flex flex-col md:flex-row justify-between items-start text-left pt-16 border-t border-gray-100">
                        <div className="max-w-xs mb-8 md:mb-0">
                            <a className="flex items-center gap-2 font-bold text-lg tracking-tight mb-4" href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                REVISION
                            </a>
                            <p className="text-sm text-gray-500 mb-6">Welcome to ultimate source for fresh perspectives! Explore curated content to enlighten, entertain and engage global readers.</p>
                        </div>
                    </div>
                    <div className="text-left text-xs text-gray-400 mt-12">
                        © 2024 - Revision. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer