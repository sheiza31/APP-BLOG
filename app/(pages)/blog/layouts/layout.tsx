import Header from "../components/Header"
import Footer from "../components/Footer"
export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <body className="antialiased">
                    <Header />
                    <main className="container mx-auto px-6 py-16">
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    );
}