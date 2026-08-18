const Preferences = () => {
    return (
        <>
            <section className="flex flex-col gap-stack-lg mb-section-gap">
                <div className="pb-2 section-header-border">
                    <h2 className="font-headline-md text-headline-md text-primary">Preferences</h2>
                </div>
                <form className="flex flex-col gap-stack-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                        <div className="flex flex-col gap-2 relative">
                            <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="language-select">Language</label>
                            <select className="custom-input font-body-md text-body-md text-primary w-full appearance-none pr-8 bg-transparent" id="language-select">
                                <option selected value="en">English (US)</option>
                                <option value="uk">English (UK)</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-0 bottom-2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="timezone-select">Timezone</label>
                            <select className="custom-input font-body-md text-body-md text-primary w-full appearance-none pr-8 bg-transparent" id="timezone-select">
                                <option selected value="utc">UTC (Coordinated Universal Time)</option>
                                <option value="est">EST (Eastern Standard Time)</option>
                                <option value="pst">PST (Pacific Standard Time)</option>
                                <option value="cet">CET (Central European Time)</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-0 bottom-2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-end">
                        <button className="border border-outline text-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-surface-container-low transition-colors duration-200" type="button">
                            Save Preferences
                        </button>
                    </div>
                </form>
            </section>

        </>
    )
}
export default Preferences