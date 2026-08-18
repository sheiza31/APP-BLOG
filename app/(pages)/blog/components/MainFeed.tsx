const MainFeed = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Feed */}
                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Article Card 1 */}
                        <article className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-orange-100">
                                <img alt="3D Radio" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIxwwlyeJDzkCdTSeF-AMTv3sQfLb1x_HEUalldH5AdxAv2iShiqIFm4YN2OSWrp9Wco6eqfoLJPjPUu-h3RQ2vnaiAa5wrMf39Tt-WaGJC-N848_WDlEtO7W0tr2s5uWOUzNWlwfexo479wqPgB1mOuyEwrSVZ9qEtJzMejMsI8gdJ5bn3ctubqkOi2NGVxDNKweGa0L6iRY7Wx1fVwTa0S9onXyn1CvVkkybV88nFcYAewl4MzVC" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">Business</span>
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">News</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">Ethan Caldwell on October 16, 2024</div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">How Tech Shapes the Future of Work in 2024</h2>
                            <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">In today's ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to...</p>
                        </article>
                        {/* Article Card 2 */}
                        <article className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-blue-100">
                                <img alt="3D Travel Icons" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8P8QPZ5CCKr8H4vuaptqhHh6hghe4aYKrdlPh__X0U9g6XcCChTqY1wlI2oAHZQ8q5lZVnt_RiLt4IYGWPfDVvZUmJAyxLBz-_LbM2vZM1nnn7r_xz_s2CZWgQhX6kwoAbucG1Hk52Wqtoj8_kwPoc0jCsFFeUtW_7ObBSKxTqHUHjV8Iv6jWT_LH2_SzBsIkLAvOcJ9wzsBqQzzDWdmkdkm7AdRZe9qkffnUoxfFWPqm15wxGTHR" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">Sport</span>
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">Travel</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">Ethan Caldwell on September 29, 2024</div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">The Future of Work: Tech and Remote Trends</h2>
                            <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">Find out why 2024 is predicted to be a pivotal year for sports technology and its impact on the industry.</p>
                        </article>
                        {/* Article Card 3 */}
                        <article className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-pink-100">
                                <img alt="3D Credit Card" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMHJqrPg1i8uhzJAPH6ItwSjwgVeWP_gkK5YSYFK_wqFZAt_tv19d7XPk2LiVVyR3db2RC3tg8RNW8gGVIJkU7VdpFPQGrm7bd68-DbyPNR73SiOnITXq3UgMlfIz4NjuiRV1L1IJRxDtLqMOuMFtLB82agYzHRIBkSCpzPdk34XHPERDpJUgGscQlH-Z0xAlKU1ST0px67g2wZU2ezL3xHJnULsPHwCunSdadGllgkpveGJnG9aSG" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">News</span>
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">Trends</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">Ethan Caldwell on September 27, 2024</div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">Remote Work Trends in the Digital Age</h2>
                            <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">Discover the cutting-edge tech gadgets making travel smarter and more convenient in 2024.</p>
                        </article>
                        {/* Article Card 4 */}
                        <article className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-purple-100">
                                <img alt="3D Game Console" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDovq7I_p4QnFSJW0wg9-QNDtslvvZ0WvzCqX5w2Wf32Xp27vL2N408zow8646EbsFCj5MpXSS9hJ4YGfiGCiGeQQzdKPSx8Mw9XmOlU_cXqfKqBMmDZKDU3uFgOaroPey02wP1cGvK5LGU8KyOJEL5zo_A3lH3d7fnIU7D66rODdaQEFTylvHOcCxKulefrL2OB8tIe6Svj02WxmCBmVRXUxnPmF03yeesofDabopIqhhVl3vpxxn" />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-800 uppercase tracking-wider">Business</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">Ethan Caldwell on September 25, 2024</div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">Business Travel Tools for the Digital Age</h2>
                            <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">Learn how startups are leveraging data to fuel growth and scale in today's competitive landscape.</p>
                        </article>
                    </div>
                    {/* Pagination */}
                    <div className="mt-16 flex justify-center items-center gap-2">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-medium">1</span>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-600 font-medium transition-colors" href="#">2</a>
                        <span className="text-gray-400">...</span>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-600 font-medium transition-colors" href="#">4</a>
                        <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-600 transition-colors" href="#">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </a>
                    </div>
                </div>
                {/* Sidebar */}
                <aside className="lg:w-1/3 space-y-8">
                    {/* About Widget */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-left">About</h3>
                        <img alt="Ethan Caldwell" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl77QAzQ1S3fOMHMer8dbQbYi9yj2hGcDU2gyqKaYsYfXVuffUuIiYkCTkKmsGsdsv2UtIHNtfyaJYozRjKx5HeIHDmVVQn1SywHDxIR99okmqIQRqyF31qYHkiAWMH-3Td2354ydj4vJmvuNtdB1TCRl35Ok0Xqoa0bnJvajhzLd1YFZbWT_Yb19QOPaxFTd_LOECzKV2KAh7KhkZX6v1rshWK4dsVAfFERyK59C_TtVqQXbZSRGY" />
                        <h4 className="text-xl font-bold text-gray-900">Ethan Caldwell</h4>
                        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-4">Reflective Blogger</p>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Ethan Caldwell shares thoughtful insights and reflections on life, culture, and personal growth. His work explores the intersections of creativity and experience, offering readers unique perspectives.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                            Paris, France
                        </div>
                        <div className="flex justify-center gap-4">
                            <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}
export default MainFeed