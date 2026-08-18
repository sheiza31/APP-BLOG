import Image from "next/image"
const HeroSection = () => {
    return (
        <>
            <section className="max-w-max-content-width mx-auto px-stack-md pt-section-gap pb-stack-xl flex flex-col items-center text-center">
                <h1 className="font-display text-display md:text-display text-primary mb-stack-md max-w-2xl">
                    Clarity in a noisy world.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px] mb-stack-xl">
                    We are a digital publication dedicated to deep reading, slow thinking, and the meticulous craft of editorial design.
                </p>
                <div className="w-full aspect-[21/9] bg-surface-container-low overflow-hidden relative border border-outline-variant">
                    <Image width={200} height={200} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 transition-opacity duration-700 hover:opacity-100 hover:grayscale-0" alt="A high-quality, editorial photograph of a minimalist modern reading room or library space. The scene features clean architectural lines, natural light pouring in through large windows, and neat stacks of premium printed publications. The aesthetic is clean, intellectual, and sophisticated, utilizing a light-mode color palette dominated by pristine whites, warm off-whites, and subtle charcoal accents. The mood is calm, focused, and scholarly, perfectly suited for a premium digital publication's About page." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmhz0aJR9WtkUIEFgUVtyGkrqAMMrqqv0xvP1p1ajYX5E1FGY-biyczccYmxzthXo8EaOspMUen5qW8F4-M8pFlI_vkGvMYbvlz4RNLZmN-WUfGyKeKlHaQGWQgatbgKdRMZSG3REtjjswAJbSp1z3RJfUeEp98I2amHlzMAw9QL_5NWyVt1O2wMe1sgZ8Mro_aY4988J5WlAe7JYY79Rcbvjz_lWMcL_o4997vdOTJ2FOk64KBCaP" />
                </div>
            </section>
        </>
    )
}
export default HeroSection 