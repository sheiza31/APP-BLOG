const Media = () => {
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-stack-md">
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="A clean, minimalist high-contrast black and white architectural photograph of a modern spiral staircase, emphasizing geometric curves and stark shadows in an editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGuPmlz51IYl17saJ0eyIkrjSDdmL3jRiKrCYx9A66vyh9ECxUW44zdHG8aF3AERICMWNfbvM17JYML-FpU6-tynyDdbCjz6dfIiQxbV42XCK_oxohjfkjmKwpvlZM7DdTsUagYkFEKNmEMm3E8oN7Zl0q273SO-ajyl-EpbdPUnT1jO51VFR5Lkobd7QXFS5BjlcA-4P6kXcoLkq6SFhB02jXawZwPcCvI9OUzY1TvETst17jOqVZ" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200"></div>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">arch-staircase-01.jpg</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">2.4 MB • Oct 12, 2023</p>
                    </div>
                </div>
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="A still life photography shot of a ceramic coffee cup on a textured light grey slate table, soft natural window light, muted teal and grey color palette, high-end lifestyle editorial feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4KzYABq6OY3ZuqFTzbZVDDlYGE8F4jOEvTEwFJPRg8Jfk0dO0o1SiruLioX4Rh6EgL9FpJNfRrXIY3HVcYw2m8tBL2mVqhtL4pT0Eqp-7ZGBWVUNm6tLimHF4hfd1f39oOZN906jFvIQyHrKm2kxt7w9g-3qg_4_AP5ZwMp_jfoqMzN8QcsNotyfTAkQRBUOGvIS46hoEOfRmXFdBHc_AVcxNKBBvll5VAxPcbx1eXG_cvE0v78Sz" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200"></div>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">morning-routine-hero.png</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">1.1 MB • Oct 10, 2023</p>
                    </div>
                </div>
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative flex items-center justify-center">
                        <span className="material-symbols-outlined text-[48px] text-outline-variant">description</span>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">Q3_Editorial_Guidelines.pdf</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">450 KB • Oct 08, 2023</p>
                    </div>
                </div>
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="A wide shot of a dense, misty pine forest viewed from above at dawn, moody atmosphere, deep green and blue tones, editorial landscape photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4_sCsJKcdh8YtwceGiJn3srBSu_2AempzlboMNBbZcpOG-IixSicSHqUHO1DJDXfeeHzgh_nlgoWe0BLnWkXxopaSjTl9m42Pa6lKIfaM4qIbY_pxh4j176YYeC2LegXJq_iSwQJ1itSckk1Y7_RSUlOx0H_pk3yusP3S40E9zJTYj88o6inEpKeghIV0Poc1bt2smxlJlIzSs0UTSiV3Day-TzMedbi8Lj3zdmX1pspmxEvjMGHJ" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200"></div>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">forest-mist-wide.jpg</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">5.2 MB • Oct 05, 2023</p>
                    </div>
                </div>
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" data-alt="Close up macro photography of ink spreading slowly on textured watercolor paper, abstract textures, stark black and white contrast, artistic editorial visual." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNnHMnLf2vHoM6gGR732rsdhtFy15wy-YwDacyOkKjVMRxbXoscCqFPmOXaQlUJrUQ-TIeG8uGhLxJJRxFoyKMkt85pbTxGDvoKN0n7mNByGrtYFq7y9z164u5Uq7M-MuXI_nocTkWq4nkZyt8xzAp2cteW_iiBn5i4rkhr7IG9uLxqeASkr8kC7NOAvx-x_VBjP3_TkIBPEdWVbSTBdXfnKXO__inJfoxhNH6I3BPKnNX6nvCBfY" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200"></div>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">ink-texture-bg.jpg</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">3.8 MB • Oct 01, 2023</p>
                    </div>
                </div>
                <div className="group flex flex-col gap-2 cursor-pointer">
                    <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant rounded-sm relative flex items-center justify-center">
                        <span className="material-symbols-outlined text-[48px] text-outline-variant">movie</span>
                    </div>
                    <div>
                        <p className="font-body-md text-caption font-semibold text-primary truncate">interview-b-roll-01.mp4</p>
                        <p className="font-caption text-label-caps text-on-surface-variant mt-1">124 MB • Sep 28, 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Media