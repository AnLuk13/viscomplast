"use client";

import React from "react";
import HeroSection from "@/app/components/landing/HeroSection";
import SponsorsSection from "@/app/components/landing/SponsorsSection";
import CatalogSection from "@/app/components/landing/CatalogSection";
import OfferSection from "@/app/components/landing/OfferSection";
import AboutSection from "@/app/components/landing/AboutSection";
import SliderSection from "@/app/components/landing/SliderSection";
import Footer from "@/app/components/footer/Footer";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";

function Home() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <main>
      <HeroSection isLargeScreen={isLargeScreen} />
      <SponsorsSection />
      <CatalogSection />
      <OfferSection />
      <AboutSection />
      <SliderSection />
      <Footer />
    </main>
  );
}

export default Home;
