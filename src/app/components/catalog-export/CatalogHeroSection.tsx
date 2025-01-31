"use client";

import React, { useState } from "react";
import styles from "@/app/styles/catalog-export/catalogHeroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import OfferButton from "@/app/components/buttons/OfferButton";
import { v4 as uuidv4 } from "uuid";

function CatalogHeroSection({ imageSrc, content }) {
  const [isLoading, setIsLoading] = useState(true);
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
        className={`${styles.heroSectionImage} ${isLoading ? "loading" : ""}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="fadeOverlay" />
      <div className={styles.catalogHeroContent}>
        <div className={styles.qualityStars}>
          {Array(5)
            .fill(undefined, undefined, undefined)
            .map(() => (
              <StarIcon key={uuidv4()} />
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
