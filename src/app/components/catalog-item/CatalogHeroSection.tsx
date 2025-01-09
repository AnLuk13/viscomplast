"use client";

import React from "react";
import styles from "@/app/styles/catalog-item/catalogHeroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import OfferButton from "@/app/components/buttons/OfferButton";

function CatalogHeroSection({ content }) {
  return (
    <section className={styles.catalogHeroSection}>
      <Image
        priority
        src="/assets/images/hero-section.png"
        alt="Hero section"
        fill
        sizes="100vw"
        quality={100}
        className={styles.heroSectionImage}
      />
      <div className={styles.catalogHeroContent}>
        <div className={styles.qualityStars}>
          {Array(5)
            .fill(undefined, undefined, undefined)
            .map(() => (
              <StarIcon key={Math.random()} />
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
