"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/catalog-export/type-gallery-layout/TypeGalleryCard";
import manifest from "@/app/lib/assets-manifest.json";

function BlindsSection({ content }) {
  return (
    <section className="sectionContainer">
      <div className={styles.typeGallerySectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("blindsSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        {content("blindsSection.description")}
      </div>
      {content.raw("blindsSection.typeGalleryCards").map((card) => (
        <TypeGalleryCard
          key={card.title}
          title={card.title}
          description={card.description}
          gallery={
            card.isManual === "true"
              ? manifest.blindsManual
              : manifest.blindsElectric
          }
        />
      ))}
    </section>
  );
}

export default BlindsSection;
