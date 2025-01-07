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

function CatalogItem() {
  return (
    <main>
      <CatalogHeroSection />
      <ProfilesSection />
      <HardwareSection />
      <ColorsSection />
      <GlassesSection />
      <HandlesSection />
      <OfferSection color="var(--primary)" />
      <SliderSection />
      <AboutSection showAboutInfo={false} />
      <SponsorsSection color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default CatalogItem;
