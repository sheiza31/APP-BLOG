import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function ArticleLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="flex h-screen overflow-hidden antialiased font-body-md text-body-md">
                <Navbar />
                <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden bg-background">
                    <Header/>
                <main className="flex-1 overflow-y-auto px-stack-lg     py-stack-xl flex justify-center">
                    {children}
                </main>
                </div>
            </body>
        </html>
        
        </>
    );
}