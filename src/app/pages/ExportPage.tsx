import React from 'react';
import CatalogHeroSection from '@/app/components/catalog-export/CatalogHeroSection';
import ProfilesSection from '@/app/components/catalog-export/profiles-layout/ProfilesSection';
import HardwareSection from '@/app/components/catalog-export/HardwareSection';
import ColorsSection from '@/app/components/catalog-export/ColorsSection';
import GlassesSection from '@/app/components/catalog-export/GlassesSection';
import HandlesSection from '@/app/components/catalog-export/HandlesSection';
import OfferSection from '@/app/components/globals/offer/OfferSection';
import SliderSection from '@/app/components/globals/SliderSection';
import AboutSection from '@/app/components/globals/AboutSection';
import SponsorsSection from '@/app/components/globals/SponsorsSection';
import Footer from '@/app/components/footer/Footer';
import { useTranslations } from 'next-intl';
import SlidingSystemsSection from '@/app/components/catalog-export/SlidingSystemsSection';
import RollerShutterBoxesSection from '@/app/components/catalog-export/RollerShutterBoxesSection';
import RollerShuttersSection from '@/app/components/catalog-export/RollerShuttersSection';
import MosquitoNetsSection from '@/app/components/catalog-export/MosquitoNetsSection';
import BlindsSection from '@/app/components/catalog-export/BlindsSection';
import manifest from '@/app/lib/assets-manifest.json';
import dynamic from 'next/dynamic';

const FirestoreSection = dynamic(
  () => import('@/app/components/wrapper/FireStoreSection'),
  { ssr: false },
);

function ExportPage({ route }: { route: string }) {
  const t = useTranslations(route);
  const isExportFrantaBelgia = route === 'exportFrantaBelgia';
  const isSpecialExport =
    route === 'exportIrlanda' || route === 'exportFrantaBelgia';
  const heroImage = manifest.hero.find(image => image.alt === route);

  return (
    <main>
      <CatalogHeroSection content={t} imageSrc={heroImage.src} />
      <FirestoreSection route={route} Component={ProfilesSection} />
      <FirestoreSection route={route} Component={SlidingSystemsSection} />
      {!isSpecialExport && <RollerShutterBoxesSection content={t} />}
      {!isSpecialExport && <RollerShuttersSection content={t} />}
      {!isSpecialExport && <MosquitoNetsSection content={t} />}
      {isExportFrantaBelgia && <BlindsSection content={t} />}
      <FirestoreSection route={route} Component={HardwareSection} />
      <ColorsSection content={t} />
      <GlassesSection content={t} />
      <HandlesSection route={route} />
      <OfferSection bgColor="var(--primary)" cardColor="var(--white)" />
      <SliderSection content={t} route={route} />
      <AboutSection showAboutInfo={false} />
      <SponsorsSection color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default ExportPage;
