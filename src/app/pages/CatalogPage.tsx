import React from 'react';
import CatalogHeroSection from '@/app/components/catalog-export/CatalogHeroSection';
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
import manifest from '@/app/lib/assets-manifest.json';
import ProfilesSection from '@/app/components/catalog-export/profiles-layout/ProfilesSection';
import dynamic from 'next/dynamic';
import SlidingSystemsSection from '@/app/components/catalog-export/SlidingSystemsSection';

const FirestoreSection = dynamic(
  () => import('@/app/components/wrapper/FireStoreSection'),
  { ssr: false },
);

function CatalogPage({ route }: { route: string }) {
  const t = useTranslations(route);
  const isGlisantePvc = route === 'glisantePvc';
  const isGlisante =
    route === 'glisantePvc' ||
    route === 'glisanteAluminiu' ||
    route === 'glisanteVekaMotion';
  const isInchideriSauFatade =
    route === 'inchideriTerase' || route === 'fatadeAluminiu';
  const isFatade = route === 'fatadeAluminiu';
  const heroImage = manifest.hero.find(image => image.alt === route);
  return (
    <main>
      <CatalogHeroSection content={t} imageSrc={heroImage.src} />
      {isGlisantePvc && (
        <FirestoreSection route={route} Component={SlidingSystemsSection} />
      )}
      {!isGlisantePvc && (
        <FirestoreSection route={route} Component={ProfilesSection} />
      )}
      {!isInchideriSauFatade && (
        <FirestoreSection route={route} Component={HardwareSection} />
      )}
      <ColorsSection content={t} />
      {!isFatade && <GlassesSection content={t} route={route} />}
      {!isGlisante && !isInchideriSauFatade && <HandlesSection route={route} />}
      <OfferSection
        bgColor="var(--primary)"
        cardColor="var(--white)"
        route={route}
      />
      <SliderSection content={t} route={route} />
      <AboutSection showAboutInfo={false} />
      <SponsorsSection color="var(--primary)" />
      <Footer />
    </main>
  );
}

export default CatalogPage;
