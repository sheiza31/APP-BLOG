import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export default function MediaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <body className="bg-surface text-on-surface font-body-md text-body-md antialiased flex h-screen overflow-hidden">
                    <Navbar />
                    <div className="flex-1 ml-64 flex flex-col h-screen relative">
                        <TopBar />
                        <main className="flex-1 overflow-y-auto p-stack-lg flex flex-col gap-stack-lg">
                            {children}
                        </main>
                    </div>
                </body>
            </html>

        </>
    );
}