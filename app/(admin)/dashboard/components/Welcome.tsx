const Welcome = ({ fullname }: { fullname: string }) => {
    return (
        <>
            <div className="mb-stack-xl flex justify-between items-end">
                <div>
                    <h2 className="font-display text-display md:text-display text-on-background m-0">Dashboard Overview</h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mt-stack-sm">Welcome back. Here is the latest from your editorial team.</p>
                </div>
                <a
                    href={`/dashboard/admin/new-article`}
                    className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded hover:bg-inverse-surface transition-colors hidden sm:flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    New Article
                </a>
            </div>
        </>
    )
}
export default Welcome  