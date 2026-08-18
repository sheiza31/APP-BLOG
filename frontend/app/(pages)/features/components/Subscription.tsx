const Subscription = () => {
    return (
        <>
            <section className="mt-section-gap text-center border-t border-outline-variant pt-stack-xl">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Join the Conversation</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">Subscribe to receive our latest essays directly to your inbox. No spam, only substance.</p>
                <form className="flex justify-center items-center gap-stack-sm max-w-md mx-auto">
                    <input className="bg-transparent border-b border-outline text-on-surface font-body-md text-body-md py-2 px-1 w-full focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant" placeholder="Your email address" required type="email" />
                    <button aria-label="Submit" className="material-symbols-outlined text-primary hover:text-secondary transition-colors cursor-pointer" type="submit">arrow_forward</button>
                </form>
            </section>

        </>
    )
}
export default Subscription