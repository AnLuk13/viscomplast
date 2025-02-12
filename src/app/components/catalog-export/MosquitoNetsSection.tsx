"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/catalog-export/type-gallery-layout/TypeGalleryCard";
import manifest from "@/app/lib/assets-manifest.json";

function MosquitoNetsSection({ content }) {
  return (
    <section className="sectionContainer">
      <div className={styles.typeGallerySectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("mosquitoNetsSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        {content("mosquitoNetsSection.description")}
      </div>
      {content.raw("mosquitoNetsSection.typeGalleryCards").map((card) => (
        <TypeGalleryCard
          key={card.title}
          title={card.title}
          description={card.description}
          gallery={manifest.mosquitoNets}
        />
      ))}
    </section>
  );
}

export default MosquitoNetsSection;
