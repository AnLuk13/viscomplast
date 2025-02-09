"use client";

import React from "react";
import OfferButton from "@/app/components/buttons/OfferButton";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";
import CarouselSlider from "./CarouselSlider";

type TypeGalleryCardProps = {
  title: Record<string, string> | string;
  description: Record<string, string> | string;
  gallery: { id: number; src: string; alt: string }[];
  locale?: string;
};

function TypeGalleryCard({
  title,
  description,
  gallery,
  locale,
}: TypeGalleryCardProps) {
  return (
    <div className={styles.typeGalleryCard}>
      <div className={styles.typeGalleryCardContent}>
        <div className={styles.typeGalleryCardTitle}>
          {typeof title === "object" ? title[locale] : title}
        </div>
        <div className={styles.typeGalleryCardDescription}>
          {typeof description === "object" ? description[locale] : description}
        </div>
        <OfferButton />
      </div>
      <CarouselSlider gallery={gallery} />
    </div>
  );
}

export default TypeGalleryCard;
