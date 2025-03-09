"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/catalog-export/catalogHeroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import OfferButton from "@/app/components/buttons/OfferButton";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";

function CatalogHeroSection({ imageSrc, content }) {
  const [isLoading, setIsLoading] = useState(true);
  const { isLargeScreen } = useIsLargeScreen(860);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (isLargeScreen && imageLoaded) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isLargeScreen, imageLoaded]);
  return (
    <section className={styles.catalogHeroSection}>
      {isLoading && <div className="imageBlur" />}
      <Image
        priority
        src={imageSrc}
        alt="Hero section"
        fill
        sizes="100vw"
        quality={100}
        className={`${styles.heroSectionImage} ${isLoading ? "heroLoading" : ""}`}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="fadeOverlay" />
      <div className={styles.catalogHeroContent}>
        <div className={styles.qualityStars}>
          {Array(5)
            .fill(undefined, undefined, undefined)
            .map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <StarIcon key={`Star icon ${index}`} />
            ))}
          <div className={styles.qualityText}>
            {content(`catalogHeroSection.qualityText`)}
          </div>
        </div>
        <div className={styles.catalogHeroTitle}>
          {content(`catalogHeroSection.catalogHeroTitle`)}
        </div>
        <OfferButton />
      </div>
    </section>
  );
}

export default CatalogHeroSection;
