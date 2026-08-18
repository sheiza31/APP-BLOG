export default function RegisterLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-background text-on-background min-h-screen flex flex-col antialiased selection:bg-secondary-container selection:text-on-secondary-container">
                <main className="flex-grow flex items-center justify-center px-stack-md py-stack-xl">
                    {children}
                </main>
            </body>
        </html>
        </>
    );
}