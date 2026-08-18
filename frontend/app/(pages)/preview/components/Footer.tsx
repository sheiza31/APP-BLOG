const Footer = () => {
    return (
        <>
            <footer className="bg-surface-container-low text-on-surface font-caption text-caption w-full py-16 border-t border-outline-variant">
                <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-180 mx-auto text-center md:text-left gap-8">
                    <div className="font-headline-md text-headline-md text-primary">The Monograph</div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100" href="#">About</a>
                        <a className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
                        <a className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100" href="#">Newsletter</a>
                        <a className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100" href="#">RSS Feed</a>
                    </div>
                    <div className="text-on-surface-variant">© 2024 The Monograph. All rights reserved. Designed for deep focus.</div>
                </div>
            </footer>
        </>
    )
}
export default Footer