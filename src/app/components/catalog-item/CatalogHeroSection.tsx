"use client";

import React from "react";
import styles from "@/app/styles/catalog-item/catalogHeroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import OfferButton from "@/app/components/buttons/OfferButton";

function CatalogHeroSection() {
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
          <div className={styles.qualityText}>excellent</div>
        </div>
        <div className={styles.catalogHeroTitle}>Ferestre din PVC</div>
        <OfferButton text="Solicită oferta" />
      </div>
    </section>
  );
}

export default CatalogHeroSection;
