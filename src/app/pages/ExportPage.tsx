import React from "react";
import CatalogHeroSection from "@/app/components/catalog-export/CatalogHeroSection";
import ProfilesSection from "@/app/components/catalog-export/profiles-layout/ProfilesSection";
import HardwareSection from "@/app/components/catalog-export/HardwareSection";
import ColorsSection from "@/app/components/catalog-export/ColorsSection";
import GlassesSection from "@/app/components/catalog-export/GlassesSection";
import HandlesSection from "@/app/components/catalog-export/HandlesSection";
import OfferSection from "@/app/components/globals/offer/OfferSection";
import SliderSection from "@/app/components/globals/SliderSection";
import AboutSection from "@/app/components/globals/AboutSection";
import SponsorsSection from "@/app/components/globals/SponsorsSection";
import Footer from "@/app/components/footer/Footer";
import { useTranslations } from "next-intl";
import SlidingSystemsSection from "@/app/components/catalog-export/SlidingSystemsSection";
import RollerShutterBoxesSection from "@/app/components/catalog-export/RollerShutterBoxesSection";
import RollerShuttersSection from "@/app/components/catalog-export/RollerShuttersSection";
import MosquitoNetsSection from "@/app/components/catalog-export/MosquitoNetsSection";

function ExportPage({ route }: { route: string }) {
  const t = useTranslations(route);

  return (
    <main>
      <CatalogHeroSection content={t} />
      <ProfilesSection content={t} />
      <SlidingSystemsSection content={t} />
      <RollerShutterBoxesSection content={t} />
      <RollerShuttersSection content={t} />
      <MosquitoNetsSection content={t} />
      <HardwareSection content={t} />
      <ColorsSection content={t} />
      <GlassesSection content={t} />
      <HandlesSection content={t} />
      <OfferSection color="var(--primary)" />
      <SliderSection content={t} />
      <AboutSection showAboutInfo={false} />
      <SponsorsSection color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default ExportPage;
