'use client';

import { useState } from 'react';
import ThreeDSplashScreen from '@/components/animation/3DSplashScreen';
import NavbarSection from './components/sections/NavbarSection';
import BackgroundSection from './components/sections/BackgroundSection';
import HeroSection from './components/sections/HomeSection';
import SkillsSection from './components/sections/SkillsSection';
import PortfolioSection from './components/sections/ProjectSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <ThreeDSplashScreen
        onFinish={() => setIsLoaded(true)}
        duration={3}
      />
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#19222D]">
      <NavbarSection />
      <BackgroundSection />
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
