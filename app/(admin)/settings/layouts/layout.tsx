import Navbar from "../components/Navbar";
import TopAppBar from "../components/TopAppBar";
export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
       <html lang="en">
        <body className="bg-background text-on-background antialiased min-h-screen flex">
            <Navbar />
            <div className="flex-1 ml-64 flex flex-col min-h-screen relative">
                <TopAppBar />
            <main className="flex-1 px-stack-lg py-stack-xl flex flex-col items-center">
                <div className="w-full max-w-[max-content-width] flex flex-col gap-section-gap">
                    {children}
                </div>
            </main>
            </div>
        </body>
       </html>
        </>
    );
}