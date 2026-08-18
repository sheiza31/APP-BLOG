const EditorialSection = () => {
    return (
        <>
            <section className="bg-surface-container-low py-section-gap border-y border-outline-variant">
                <div className="max-w-max-content-width mx-auto px-stack-md">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-xl text-center">The Editorial Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-xl">
                        <div className="group flex flex-col items-center text-center">
                            <div className="w-48 h-48 mb-stack-md overflow-hidden bg-surface-container-highest border border-outline-variant transition-transform duration-500 group-hover:scale-105">
                                <img className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" data-alt="A professional, editorial-style portrait photograph of a thoughtful individual in a brightly lit, minimalist studio setting. The subject is dressed in subtle, modern, dark-toned clothing that contrasts beautifully with the pristine, off-white background. The lighting is soft and flattering, creating a high-key, light-mode aesthetic that feels premium, intellectual, and authoritative. The overall mood is calm, focused, and approachable." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrvqlPX19Gn47OKVOpHFNZxK4TUsxSSbdc2EBwLThqNsEi73ErdXzOMtnXipSmZwkgkEIR62V_vz2BRU_299X4yaEzJjOzqTAUHPK3x-741nh3QnER48DU-DOqood-ZpGO9HHxwCwO5a9wKGVC5Te7su5wnaD8CZRlfwJHtiLILPZBtXLEEH5Ces7aXZwEFOp3_gsJL0kBN3vAR4Pnhal-9ykOlfpByZGr0w96-D-PRBD9sByMBdVH" />
                            </div>
                            <h3 className="font-headline-md text-headline-md text-primary">Eleanor Vance</h3>
                            <p className="font-label-caps text-label-caps text-secondary mt-stack-xs uppercase tracking-widest">Editor in Chief</p>
                        </div>
                        <div className="group flex flex-col items-center text-center">
                            <div className="w-48 h-48 mb-stack-md overflow-hidden bg-surface-container-highest border border-outline-variant transition-transform duration-500 group-hover:scale-105">
                                <img className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" data-alt="A professional, premium portrait photograph of an individual looking slightly off-camera, captured in a modern, light-filled minimalist environment. The background is a soft, out-of-focus bright space, emphasizing the subject. The lighting is natural and bright, contributing to a clean, light-mode editorial aesthetic. The color palette relies on crisp whites, soft greys, and deep charcoal details. The mood conveys intellectual depth and editorial rigor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8aRQWjB3gEAEcIgtzg_WBFqQJDmOMgyxxPmKdb95_wu5qCM90NPXMB1QrHJUuyTH6sSSrw2XgwS3PPH8Ecs1AjxBkHXdPoLF2F4b73-n6o3kPst0R3Rd5hbni3CKwUDI5maZWZMxNx6jI9wzIUGvkGl9NhPVCaOO4kPzyMZ0z_HY65IbaPiM6tz0UlGv75Bkht5ep1uq3WL8B2lcCKjQyW280NL5BCB90AEQVkY1zRg8GB16s9F16" />
                            </div>
                            <h3 className="font-headline-md text-headline-md text-primary">Julian Thorne</h3>
                            <p className="font-label-caps text-label-caps text-secondary mt-stack-xs uppercase tracking-widest">Creative Director</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EditorialSection