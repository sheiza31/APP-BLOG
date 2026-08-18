import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-background text-on-background font-body-md antialiased min-h-screen">
                <Navbar />
                <TopBar />
                <main className="ml-64 p-stack-lg md:p-stack-xl max-w-7xl mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
