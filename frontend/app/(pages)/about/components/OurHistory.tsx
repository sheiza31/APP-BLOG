const OurHistory = () => {
    return (
        <>
            <section className="max-w-max-content-width mx-auto px-stack-md py-section-gap">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-xl">Our History</h2>
                <div className="space-y-stack-xl border-l-[1px] border-outline-variant pl-stack-lg relative">
                    <div className="relative">
                        <div className="absolute -left-[calc(2rem+4px)] top-2 w-2 h-2 bg-secondary rounded-full"></div>
                        <h3 className="font-label-caps text-label-caps text-secondary mb-stack-xs uppercase tracking-widest">2020</h3>
                        <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm">The Foundation</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[500px]">
                            Founded as a small newsletter exploring the intersection of design philosophy and technology, prioritizing plain text over flashy graphics.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[calc(2rem+4px)] top-2 w-2 h-2 bg-secondary rounded-full"></div>
                        <h3 className="font-label-caps text-label-caps text-secondary mb-stack-xs uppercase tracking-widest">2022</h3>
                        <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm">The Expansion</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[500px]">
                            Transitioned to a full digital publication. Established the core editorial team and codified our strict, typography-first design system to handle long-form essays.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[calc(2rem+4px)] top-2 w-2 h-2 bg-secondary rounded-full"></div>
                        <h3 className="font-label-caps text-label-caps text-secondary mb-stack-xs uppercase tracking-widest">Present</h3>
                        <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm">A Quiet Authority</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-[500px]">
                            Today, The Insight serves a global readership that values deep, uninterrupted reading experiences, continuing our mission to elevate the standard of digital editorial design.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurHistory