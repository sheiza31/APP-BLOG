import TopAppBar from "@/app/share/TopAppBar";
import Footer from "@/app/share/Footer";
export default function FeaturesLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-background text-on-background font-body-md text-body-md antialiased flex flex-col min-h-screen">
                <TopAppBar />
                <main className="flex-grow w-full max-w-max-content-width mx-auto px-stack-md md:px-0 py-stack-xl md:py-section-gap">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
        
        </>
    );
}