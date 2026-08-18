const Contact = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-xl pt-stack-lg">
                <div className="flex flex-col gap-stack-lg bg-surface-container-lowest p-stack-xl rounded-lg border border-outline-variant">
                    <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">Send a Message</h2>
                    <form className="flex flex-col gap-stack-md">
                        <div className="flex flex-col gap-stack-xs">
                            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="name">Name</label>
                            <input className="input-minimal font-body-md text-body-md" id="name" placeholder="Jane Doe" type="text" />
                        </div>
                        <div className="flex flex-col gap-stack-xs">
                            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email</label>
                            <input className="input-minimal font-body-md text-body-md" id="email" placeholder="jane@example.com" type="email" />
                        </div>
                        <div className="flex flex-col gap-stack-xs">
                            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="subject">Subject</label>
                            <input className="input-minimal font-body-md text-body-md" id="subject" placeholder="Regarding an essay submission" type="text" />
                        </div>
                        <div className="flex flex-col gap-stack-xs mt-stack-sm">
                            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="message">Message</label>
                            <textarea className="input-minimal font-body-md text-body-md resize-none" id="message" placeholder="Your message here..." rows={4}></textarea>
                        </div>
                        <button className="mt-stack-md self-start bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded uppercase hover:bg-opacity-90 transition-opacity" type="submit">Submit</button>
                    </form>
                </div>
                <div className="flex flex-col gap-stack-xl pt-stack-sm">
                    <div className="flex flex-col gap-stack-md">
                        <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary" data-icon="location_on">location_on</span> Office
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            The Insight Editorial<br />
                            124 Content Avenue, Suite 400<br />
                            New York, NY 10012
                        </p>
                    </div>
                    <div className="flex flex-col gap-stack-md">
                        <h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary" data-icon="mail">mail</span> Direct Inquiries
                        </h3>
                        <div className="flex flex-col gap-stack-sm font-body-md text-body-md text-on-surface-variant">
                            <p><span className="font-medium text-primary">General:</span> hello@theinsight.com</p>
                            <p><span className="font-medium text-primary">Submissions:</span> pitch@theinsight.com</p>
                            <p><span className="font-medium text-primary">Press:</span> press@theinsight.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-stack-md mt-auto">
                        <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase">Follow Us</h3>
                        <div className="flex gap-stack-md">
                            <a className="text-primary hover:text-secondary transition-colors" href="#">Twitter</a>
                            <a className="text-primary hover:text-secondary transition-colors" href="#">LinkedIn</a>
                            <a className="text-primary hover:text-secondary transition-colors" href="#">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact