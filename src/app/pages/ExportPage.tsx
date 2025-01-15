import React from "react";
import CatalogHeroSection from "@/app/components/catalog-item/CatalogHeroSection";
import ProfilesSection from "@/app/components/catalog-item/profiles-layout/ProfilesSection";
import HardwareSection from "@/app/components/catalog-item/HardwareSection";
import ColorsSection from "@/app/components/catalog-item/ColorsSection";
import GlassesSection from "@/app/components/catalog-item/GlassesSection";
import HandlesSection from "@/app/components/catalog-item/HandlesSection";
import OfferSection from "@/app/components/globals/offer/OfferSection";
import SliderSection from "@/app/components/globals/SliderSection";
import AboutSection from "@/app/components/globals/AboutSection";
import SponsorsSection from "@/app/components/globals/SponsorsSection";
import Footer from "@/app/components/footer/Footer";
import { useTranslations } from "next-intl";
import SlidingSystemsSection from "@/app/components/sliding-systems/SlidingSystemsSection";

function ExportPage({ route }: { route: string }) {
  const t = useTranslations(route);

  return (
    <main>
      <CatalogHeroSection content={t} />
      <ProfilesSection content={t} />
      <SlidingSystemsSection />
      <HardwareSection content={t} />
      <ColorsSection content={t} />
      <GlassesSection content={t} />
      <HandlesSection content={t} />
      <OfferSection content={t} color="var(--primary)" />
      <SliderSection content={t} />
      <AboutSection content={t} showAboutInfo={false} />
      <SponsorsSection content={t} color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default ExportPage;
