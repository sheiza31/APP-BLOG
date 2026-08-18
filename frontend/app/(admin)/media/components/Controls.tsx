const Controls = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full max-w-[1200px] mx-auto pb-4 border-b border-outline-variant">
                <div className="flex gap-6 font-label-caps text-label-caps">
                    <button className="text-primary border-b-2 border-primary pb-2 font-semibold">Images</button>
                    <button className="text-on-surface-variant hover:text-primary pb-2 transition-colors">Documents</button>
                    <button className="text-on-surface-variant hover:text-primary pb-2 transition-colors">Videos</button>
                </div>
                <div className="relative w-full md:w-64">
                    <span className="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">search</span>
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant pl-8 py-2 focus:ring-0 focus:border-primary font-caption text-caption text-primary placeholder-outline-variant transition-colors" placeholder="Search media..." type="text" />
                </div>
            </div>
        </>
    )
}
export default Controls