import ProgressBar from "../components/ProgressBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function PreviewLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-background text-on-background font-body-md antialiased pt-20">
                <ProgressBar />
                <Navbar />
                <main className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-48 pt-stack-xl pb-section-gap">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
        
        </>
    );
}