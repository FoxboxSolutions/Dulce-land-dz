"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import HomeOurBoxesSection from "@/components/HomeOurBoxesSection";
import LuxuryExperienceSection from "@/components/LuxuryExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeContactFooter from "@/components/HomeContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow"> {/* Removed pt-[92px] */}
        <HeroSection />
        <AboutUsSection />
        <HomeOurBoxesSection />
        <LuxuryExperienceSection />
        <TestimonialsSection />
      </main>
      <HomeContactFooter />
      <MadeWithDyad />
    </div>
  );
};

export default Index;