const Header = () => {
    return (
        <>
            <header className="max-w-180 mx-auto text-center mb-stack-lg">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-stack-sm inline-block">Design Architecture</span>
                <h1 className="font-display text-display md:text-[64px] leading-tight mb-stack-md">The Silent Typographer: Finding Clarity in Blank Space</h1>
                <div className="flex items-center justify-center gap-4 font-caption text-caption text-on-surface-variant">
                    <span>By Elena Rostova</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>Oct 14, 2024</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>8 min read</span>
                </div>
            </header>
        </>
    )
}
export default Header