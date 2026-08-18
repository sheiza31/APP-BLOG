const Features = () => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                <div className="bg-surface-container-low p-stack-xl rounded-lg border border-outline-variant flex flex-col items-start gap-stack-md hover:bg-surface-container-high transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "FILL 0" }}>article</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Ad-Free Reading</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Your attention is your most valuable asset. We respect it by providing a clean, distraction-free environment without intrusive advertisements or pop-ups. Just pure, uninterrupted thought.</p>
                </div>
                <div className="bg-surface-container-low p-stack-xl rounded-lg border border-outline-variant flex flex-col items-start gap-stack-md hover:bg-surface-container-high transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "FILL 0" }}>library_books</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Deep-Dive Essays</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">We bypass the superficial to explore complex ideas thoroughly. Our essays are meticulously researched and crafted to provide comprehensive insights that challenge conventional thinking.</p>
                </div>
                <div className="bg-surface-container-low p-stack-xl rounded-lg border border-outline-variant flex flex-col items-start gap-stack-md hover:bg-surface-container-high transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "FILL 0" }}>collections_bookmark</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Curated Collections</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Navigate our extensive archives through carefully thematic collections. Whether you're exploring stoicism or modern design principles, find interconnected ideas curated for cohesive learning.</p>
                </div>
                <div className="bg-surface-container-low p-stack-xl rounded-lg border border-outline-variant flex flex-col items-start gap-stack-md hover:bg-surface-container-high transition-colors duration-300">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "FILL 0" }}>group</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Expert Contributors</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Hear from leading voices across various disciplines. We collaborate with philosophers, designers, and thinkers who bring profound expertise and unique perspectives to every piece.</p>
                </div>
            </section>
        </>
    )
}
export default Features