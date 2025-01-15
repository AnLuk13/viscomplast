"use client";

import React from "react";
import OfferButton from "@/app/components/buttons/OfferButton";
import styles from "@/app/styles/sliding-systems/slidingSystemsSection.module.scss";
import CarouselSlider from "./CarouselSlider";

type TypeGalleryCardProps = {
  title: string;
  description: string;
};

function TypeGalleryCard({ title, description }: TypeGalleryCardProps) {
  return (
    <div className={styles.typeGalleryCard}>
      <div className={styles.typeGalleryCardContent}>
        <div className={styles.typeGalleryCardTitle}>{title}</div>
        <div className={styles.typeGalleryCardDescription}>{description}</div>
        <OfferButton />
      </div>
      <CarouselSlider />
    </div>
  );
}

export default TypeGalleryCard;
