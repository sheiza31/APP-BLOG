import TopAppBar from "../../../share/TopAppBar";
import Footer from "../../../share/Footer";
export default function AboutLayout({children}: {children: React.ReactNode}) {
    return (
       <>
        <html lang="en">
            <body className="bg-background text-on-background antialiased min-h-screen flex flex-col">
                <TopAppBar />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
       </>
    );
}