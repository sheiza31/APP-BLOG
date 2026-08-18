
import BlogLayout from "./layouts/layout"
import Trending from "./components/Trending"
import MainFeed from "./components/MainFeed"
import HeroSection from "./components/HeroSection";
export default function BlogPage() {
    return (
        <>
        <BlogLayout>
            <HeroSection />
            <Trending />
            <MainFeed />
        </BlogLayout>
        </>
    );
}