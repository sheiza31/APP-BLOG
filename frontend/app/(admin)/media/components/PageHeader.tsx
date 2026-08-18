const PageHeader = () => {
    return (
        <>
            <div className="flex justify-between items-end w-full max-w-[1200px] mx-auto">
                <div>
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Media Library</h2>
                    <p className="text-on-surface-variant font-caption text-caption">Manage all uploaded assets, images, and documents.</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded font-label-caps text-label-caps flex items-center gap-2 hover:bg-surface-tint transition-colors">
                    <span className="material-symbols-outlined text-[18px]">upload</span>
                    Upload New Media
                </button>
            </div>
        </>
    )
}
export default PageHeader