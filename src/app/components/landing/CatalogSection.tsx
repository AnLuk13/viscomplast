"use client";

import React from "react";
import styles from "@/app/styles/catalogSection.module.scss";
import CatalogCard from "@/app/components/CatalogCard";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import { catalogCards } from "@/app/lib/consts/common";

function CatalogSection() {
  return (
    <div className={styles.catalogSection}>
      <div className={styles.titleBox}>
        <div className={styles.catalogSectionTitle}>
          <BlinkIcon color="#F3F8FF" />
          <div>
            Catalog <b>Viscomplast</b>
          </div>
          <BlinkIcon color="#F3F8FF" />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {catalogCards.map((item) => (
          <CatalogCard
            key={item.title}
            title={item.title}
            items={item.items}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogSection;
