import Header from "../components/Header";
import Navbar from  "../../../share/Navbar"
export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <html lang="en">
            <body className="bg-background text-on-background font-body-md min-h-screen flex">
                 <Navbar />
                <div className="flex-1 md:ml-64 flex flex-col min-h-screen bg-background">
                    <Header />
                <main className="flex-1 p-stack-lg md:p-stack-xl max-w-7xl mx-auto w-full">
                    {children}
                </main>
                </div>
            </body>
        </html>
        
        </>
    );
}