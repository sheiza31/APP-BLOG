import FeaturesLayout from "./layouts/layout";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Subscription from "./components/Subscription";
export default function FeaturesPage() {
    return (
        <>
        <FeaturesLayout>
            <HeroSection />
            <Features />
            <Subscription />
        </FeaturesLayout>
        </>
    );
}