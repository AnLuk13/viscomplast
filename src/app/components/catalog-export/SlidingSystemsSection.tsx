"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/catalog-export/type-gallery-layout/TypeGalleryCard";
import { v4 as uuidv4 } from "uuid";

function SlidingSystemsSection({ data, locale }) {
  return (
    <section className="sectionContainer">
      <div className={styles.typeGallerySectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{data?.title[locale]}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>{data?.description[locale]}</div>
      {data?.typeGalleryCards.map((card) => (
        <TypeGalleryCard
          key={uuidv4()}
          title={card.title}
          description={card.description}
          gallery={card.gallery}
          locale={locale}
        />
      ))}
    </section>
  );
}

SlidingSystemsSection.displayName = "SlidingSystemsSection"; // Prevents renaming in production
export default SlidingSystemsSection;
