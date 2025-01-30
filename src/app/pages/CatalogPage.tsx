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
import manifest from "@/app/lib/assets-manifest.json";

function CatalogPage({ route }: { route: string }) {
  const t = useTranslations(route);
  const isGlisante =
    route === "glisantePvc" ||
    route === "glisanteAluminiu" ||
    route === "glisanteVekaMotion";
  const isInchidereSauFatade =
    route === "inchideriTerase" || route === "fatadeAluminiu";
  const isFatade = route === "fatadeAluminiu";
  const heroImage = manifest.hero.find((image) => image.alt === route);
  return (
    <main>
      <CatalogHeroSection content={t} imageSrc={heroImage.src} />
      <ProfilesSection content={t} />
      {!isInchidereSauFatade && <HardwareSection content={t} />}
      <ColorsSection content={t} />
      {!isFatade && <GlassesSection content={t} />}
      {!isGlisante && !isFatade && <HandlesSection content={t} />}
      <OfferSection bgColor="var(--primary)" cardColor="var(--white)" />
      <SliderSection content={t} route={route} />
      <AboutSection showAboutInfo={false} />
      <SponsorsSection color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default CatalogPage;
