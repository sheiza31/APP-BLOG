import TopAppBar from "@/app/share/TopAppBar";
import Footer from "@/app/share/Footer";
export default function ContactsLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="font-body-md text-body-md min-h-screen flex flex-col">
                <TopAppBar />
                <main className="grow w-full max-w-max-content-width mx-auto px-4 md:px-0 py-section-gap flex flex-col gap-stack-xl">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
        
        </>
    );
}