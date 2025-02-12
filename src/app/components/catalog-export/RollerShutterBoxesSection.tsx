"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/catalog-export/type-gallery-layout/TypeGalleryCard";
import manifest from "@/app/lib/assets-manifest.json";

function RollerShutterBoxesSection({ content }) {
  return (
    <section className="sectionContainer">
      <div className={styles.typeGallerySectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("rollerShutterBoxesSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        {content("rollerShutterBoxesSection.description")}
      </div>
      {content.raw("rollerShutterBoxesSection.typeGalleryCards").map((card) => (
        <TypeGalleryCard
          key={card.title}
          title={card.title}
          description={card.description}
          gallery={manifest.rollerShutterBoxes}
        />
      ))}
    </section>
  );
}

export default RollerShutterBoxesSection;
