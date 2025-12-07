import NavbarSection from "./components/sections/NavbarSection";
import BackgroundSection from "./components/sections/BackgroundSection";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection"; 

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <NavbarSection />
      <BackgroundSection />
      <HeroSection />
      <PortfolioSection />
    </div>
  );
}
