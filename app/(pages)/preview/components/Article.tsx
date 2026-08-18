import Image from "next/image";
import Link from "next/link";
const Article = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                <article className="w-full max-w-180 mx-auto lg:mx-0 flex-1 font-body-lg text-body-lg leading-relaxed text-on-surface">
                    <p className="mb-stack-lg drop-cap">In the cacophony of modern digital interfaces, silence is often the most profound statement a designer can make. We are instinctively driven to fill every pixel, to maximize utility, to ensure that no corner of the screen goes 'unused'. Yet, it is precisely in the unused corners that reading happens.</p>
                    <p className="mb-stack-lg">Whitespace, or negative space, is not merely a byproduct of layout; it is an active structural element. It functions similarly to the pauses between notes in a musical composition. Without the pause, there is no rhythm, only noise. When we design for long-form reading, our primary objective is to reduce cognitive load and facilitate a seamless flow of information from the screen to the mind.</p>
                    <h2 className="font-headline-lg text-headline-lg mt-stack-xl mb-stack-md">The Architecture of Attention</h2>
                    <p className="mb-stack-lg">Consider the margins of a printed book. They serve a physical purpose—a place for thumbs to hold the pages without covering the text—but they also serve a psychological one. They frame the narrative, isolating it from the chaotic reality surrounding the reader.</p>
                    <p className="mb-stack-lg">Translating this to digital environments requires discipline. We must resist the urge to deploy sidebars filled with irrelevant metrics or intrusive navigational elements that compete for attention.</p>
                    <figure className="my-stack-xl px-8 border-l-[3px] border-secondary">
                        <blockquote className="font-headline-md text-headline-md italic text-on-background">
                            "Good typography is like a clear window pane; bad typography is like a stained glass window. You look at the stained glass, but you look through the clear pane."
                        </blockquote>
                        <figcaption className="mt-4 font-caption text-caption text-on-surface-variant uppercase tracking-wide">— Beatrice Warde</figcaption>
                    </figure>
                    <h2 className="font-headline-lg text-headline-lg mt-stack-xl mb-stack-md">Rhythm and Scale</h2>
                    <p className="mb-stack-lg">A harmonious typographic scale ensures that the hierarchy of information is immediately legible. Headlines act as anchors, while body copy flows like a gentle stream. When these elements are out of proportion, the reading experience stutters.</p>
                    <p className="mb-stack-lg">The fixed-width column is paramount here. A line length extending beyond 75 characters strains the eye, forcing the reader to search for the beginning of the next line. By constraining the width, we dictate a comfortable, rhythmic reading pace.</p>
                </article>
                <aside className="hidden lg:block w-64 hrink-0 sticky top-32 h-fit">
                    <div className="mb-12">
                        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 border-b border-outline-variant pb-2">About the Author</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <Image width={100} height={100} alt="Elena Rostova" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhDvir54NGIilMvpcQ-vNgHnysWbgdBSHblAtkhDP1MA6fmY-9UAPMmx3pIQ8KCKaZTPhnZj6DvNDzMa6Qxlr0tYB0MtVlFB1b7DgTVklhoySTW-ps5NeoNo3v02an28S-YQH8NI5F0sfvjYsR2Rzp20be4oKZ1WX99smMdxxkT7HdbThEea7XDZ314Wi3zboewNEWTYwt9LvZB8WUOy8nzRwZ0peTMRXW4reqAgsKW4q3KC6vfRzy" />
                            <div>
                                <p className="font-headline-md text-[18px] leading-tight">Elena Rostova</p>
                                <p className="font-caption text-caption text-on-surface-variant">Design Critic</p>
                            </div>
                        </div>
                        <p className="font-caption text-caption text-on-surface-variant leading-relaxed">Elena explores the intersection of digital typography and cognitive science.</p>
                    </div>
                    <div>
                        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 border-b border-outline-variant pb-2">Related Reading</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link className="group block" href="#">
                                    <p className="font-headline-md text-[16px] leading-tight group-hover:text-secondary transition-colors">The Ethics of Infinite Scroll</p>
                                    <p className="font-caption text-[12px] text-on-surface-variant mt-1">Philosophy</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="group block" href="#">
                                    <p className="font-headline-md text-[16px] leading-tight group-hover:text-secondary transition-colors">Grid Systems in the Modern Web</p>
                                    <p className="font-caption text-[12px] text-on-surface-variant mt-1">Design</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}
export default Article