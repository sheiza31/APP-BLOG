const General = () => {
    return (
        <>
            <section className="flex flex-col gap-stack-lg">
                <div className="pb-2 section-header-border">
                    <h2 className="font-headline-md text-headline-md text-primary">General Settings</h2>
                </div>
                <form className="flex flex-col gap-stack-md">
                    <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="site-title">Site Title</label>
                        <input className="custom-input font-body-md text-body-md text-primary w-full" id="site-title" type="text" value="The Insight" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="site-tagline">Tagline</label>
                        <input className="custom-input font-body-md text-body-md text-primary w-full" id="site-tagline" type="text" value="A Minimalist Editorial Space" />
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        <label className="font-label-caps text-label-caps text-on-surface-variant">Site Logo</label>
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 bg-surface-container-low border border-outline-variant flex items-center justify-center">
                                <span className="material-symbols-outlined text-outline" data-icon="image">image</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 rounded flex items-center gap-2 self-start hover:bg-inverse-surface transition-colors duration-200" type="button">
                                    <span className="material-symbols-outlined text-[16px]" data-icon="upload">upload</span>
                                    Upload Logo
                                </button>
                                <span className="font-caption text-caption text-on-surface-variant">Recommended size: 512x512px (PNG or SVG)</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-end">
                        <button className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-inverse-surface transition-colors duration-200" type="button">
                            Save General Changes
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default General