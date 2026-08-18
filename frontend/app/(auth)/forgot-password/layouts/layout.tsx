export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-surface text-on-surface min-h-screen flex flex-col antialiased selection:bg-secondary-container selection:text-on-secondary-container">
                <main className="grow flex items-center justify-center px-stack-md py-stack-xl">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}