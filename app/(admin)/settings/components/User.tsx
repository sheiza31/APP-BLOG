const User = () => {
    return (
        <>
            <section className="flex flex-col gap-stack-lg">
                <div className="pb-2 section-header-border">
                    <h2 className="font-headline-md text-headline-md text-primary">User Profile</h2>
                </div>
                <form className="flex flex-col gap-stack-md">
                    <div className="flex flex-col gap-4 pb-4">
                        <label className="font-label-caps text-label-caps text-on-surface-variant">Avatar</label>
                        <div className="flex items-center gap-6">
                            <img alt="Current Avatar" className="w-20 h-20 rounded-full object-cover grayscale" data-alt="A close-up, high-quality black and white portrait of a person looking directly at the camera. Minimalist background. Professional, editorial style lighting emphasizing texture and depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkM5qAu1wQWV1QwBrREapWXNi723l6eENgnFOZDmCaXivonyBw1NIAqVBmzrTor9o_kZjudt-Wlk1gtYND9CZEDKbYDkP-bE3OZDT7MOgFjDiRgmRrMwTZ7VpXgzwo8YTcsZGP8NJscU2lq4g9Td5iU8INj3xvY7CmKqAJK_ECwrefrtHAfVzTKSrXJ2hgJdrpGmcRnDY7gf7LzuP-SdRkv9lPzDRLgysBbiF6GYFE0YjhJuVSUrLe" />
                            <button className="border border-outline text-primary font-label-caps text-label-caps px-4 py-2 rounded hover:bg-surface-container-low transition-colors duration-200" type="button">
                                Change Avatar
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                        <div className="flex flex-col gap-2">
                            <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="first-name">First Name</label>
                            <input className="custom-input font-body-md text-body-md text-primary w-full" id="first-name" type="text" value="Admin" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="last-name">Last Name</label>
                            <input className="custom-input font-body-md text-body-md text-primary w-full" id="last-name" type="text" value="User" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="email-address">Email Address</label>
                        <input className="custom-input font-body-md text-body-md text-primary w-full" id="email-address" type="email" value="admin@theinsight.local" />
                    </div>
                    <div className="pt-4 pb-2 border-t border-outline-variant mt-4">
                        <h3 className="font-headline-md text-headline-md text-primary mb-4">Change Password</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                            <div className="flex flex-col gap-2">
                                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="new-password">New Password</label>
                                <input className="custom-input font-body-md text-body-md text-primary w-full" id="new-password" placeholder="••••••••" type="password" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="confirm-password">Confirm Password</label>
                                <input className="custom-input font-body-md text-body-md text-primary w-full" id="confirm-password" placeholder="••••••••" type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-end">
                        <button className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-inverse-surface transition-colors duration-200" type="button">
                            Save Profile
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default User