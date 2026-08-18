import AboutLayout from "./layouts/layout";
import HeroSection from "./components/HeroSection";
import EditorialSection from "./components/EditorialSection";
import OurPhilosophy from "./components/OurPhilosophy";
import OurHistory from "./components/OurHistory";
export default function AboutPage() {
    return (
      <>
      <AboutLayout>
        <HeroSection />
        <OurPhilosophy />
        <EditorialSection />
        <OurHistory />
      </AboutLayout>
      </>
    );
}