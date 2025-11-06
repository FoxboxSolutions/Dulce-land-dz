"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]"> {/* Added padding-top to account for fixed header height */}
        <HeroSection />
        {/* Future sections like About Us, Services, etc., will be added here */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;