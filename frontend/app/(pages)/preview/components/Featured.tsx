import Image from "next/image"
const Featured = () => {
    return (
        <>
            <div className="w-full mb-stack-xl">
                <Image width={2000} height={2000} alt="A wide, high-resolution editorial photograph of a minimalist architect's desk bathed in soft, natural morning light. The desk features a perfectly aligned stack of heavy matte paper, a single sleek black pen, and ample empty space, embodying a serene, organized, and focused aesthetic." className="w-full h-100 md:h-150 object-cover rounded-sm border border-outline-variant/30 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpCA-t0lur5H7eRWgPj2y64p3XsNZGn48Ab7eaNfrE2yb9ngjkQcNUkbrDixc-JZTpxHxXEhc6dsRwfti_ZDWdizY0FD74b8WP_xAPDMMOo5cUgVRaN2_2Hws0fdvv3_74lbyTzr4ZkH6mglyIe4-sOtOBicNJdanFV5JzNh_frZZCeQYEgotKDvT4RrnlU3HwNjL5CRXFRukeAG8U6wexdd8zse4kkuVRWP9cU1vC3T3ASUQZPdPE" />
                <p className="text-center font-caption text-caption text-on-surface-variant mt-2 italic">The deliberate absence of elements allows core concepts to breathe.</p>
            </div>

        </>
    )
}
export default Featured