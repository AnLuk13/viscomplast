"use client";

import React from "react";
import HeroSection from "@/app/components/landing/HeroSection";
import SponsorsSection from "@/app/components/globals/SponsorsSection";
import CatalogSection from "@/app/components/landing/catalog/CatalogSection";
import OfferSection from "@/app/components/globals/offer/OfferSection";
import AboutSection from "@/app/components/globals/AboutSection";
import Footer from "@/app/components/footer/Footer";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/app/components/header/LoadingSpinner";

const SliderSection = dynamic(
  () => import("@/app/components/globals/SliderSection"),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  },
);

function Home() {
  const t = useTranslations("home");
  return (
    <main>
      <HeroSection content={t} />
      <SponsorsSection color="var(--background)" />
      <CatalogSection content={t} />
      <OfferSection bgColor="var(--background)" route="/" />
      <AboutSection showAboutInfo />
      <SliderSection content={t} route="home" />
      <Footer />
    </main>
  );
}

export default Home;
