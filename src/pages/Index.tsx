"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import HomeOurBoxesSection from "@/components/HomeOurBoxesSection";
import LuxuryExperienceSection from "@/components/LuxuryExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeContactFooter from "@/components/HomeContactFooter";
import LuxuryBrandShowcase from "@/components/LuxuryBrandShowcase";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BlogSection from "@/components/BlogSection"; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LuxuryBrandShowcase />
        <AboutUsSection />
        <HomeOurBoxesSection />
        <LuxuryExperienceSection />
        <WhyChooseUsSection />
        <BlogSection /> {/* Add the new component here, before HomeContactFooter */}
        <TestimonialsSection />
      </main>
      <HomeContactFooter />
      <MadeWithDyad />
    </div>
  );
};

export default Index;