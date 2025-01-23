"use client";

import React from "react";
import HeroSection from "@/app/components/landing/HeroSection";
import SponsorsSection from "@/app/components/globals/SponsorsSection";
import CatalogSection from "@/app/components/landing/catalog/CatalogSection";
import OfferSection from "@/app/components/globals/offer/OfferSection";
import AboutSection from "@/app/components/globals/AboutSection";
import SliderSection from "@/app/components/globals/SliderSection";
import Footer from "@/app/components/footer/Footer";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";
import { useTranslations } from "next-intl";

function Home() {
  const isLargeScreen = useIsLargeScreen();
  const t = useTranslations("home");
  return (
    <main>
      <HeroSection content={t} isLargeScreen={isLargeScreen} />
      <SponsorsSection color="var(--background)" />
      <CatalogSection content={t} />
      <OfferSection bgColor="var(--background)" />
      <AboutSection showAboutInfo />
      <SliderSection content={t} />
      <Footer />
    </main>
  );
}

export default Home;
