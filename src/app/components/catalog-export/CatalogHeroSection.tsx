"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/catalogHeroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import OfferButton from "@/app/components/buttons/OfferButton";
import { v4 as uuidv4 } from "uuid";

function CatalogHeroSection({ imageSrc, content }) {
  return (
    <section className={styles.catalogHeroSection}>
      <Image
        priority
        src={imageSrc}
        alt="Hero section"
        fill
        sizes="100vw"
        quality={100}
        className={styles.heroSectionImage}
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
