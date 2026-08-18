import Link from "next/link"
const Trending = () => {
    return (
        <>
            <section className="mb-16">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-6">Explore Trending Topics</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> Technology
                    </Link>
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> Travel
                    </Link>
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Sport
                    </Link>
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span> Business
                    </Link>
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-pink-500"></span> Management
                    </Link>
                    <Link className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:border-gray-300 shadow-sm transition-all" href="#">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Trends
                    </Link>
                </div>
            </section>

        </>
    )
}
export default Trending