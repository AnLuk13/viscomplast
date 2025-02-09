"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/catalog-export/type-gallery-layout/TypeGalleryCard";
import { v4 as uuidv4 } from "uuid";
import manifest from "@/app/lib/assets-manifest.json";

function RollerShutterBoxesSection({ content }) {
  const gallery = manifest.rollerShutterBoxes;
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
          key={uuidv4()}
          title={card.title}
          description={card.description}
          gallery={gallery}
        />
      ))}
    </section>
  );
}

export default RollerShutterBoxesSection;
