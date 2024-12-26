import HeroSection from "@/app/components/landing/HeroSection";
import SponsorsSection from "@/app/components/landing/SponsorsSection";
import CatalogSection from "@/app/components/landing/CatalogSection";
import OfferSection from "@/app/components/landing/OfferSection";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // const t = useTranslations('home');
  return (
    <div>
      <HeroSection />
      <SponsorsSection />
      <CatalogSection />
      <OfferSection />
    </div>
  );
}
