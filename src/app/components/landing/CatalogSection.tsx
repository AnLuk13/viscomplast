"use client";

import React from "react";
import styles from "@/app/styles/catalogSection.module.scss";
import CatalogCard from "@/app/components/CatalogCard";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import test from "../../../../public/assets/images/hero-section.png";

function CatalogSection() {
  const catalogItems = [
    {
      title: "Ferestre",
      items: ["PVC", "ALUMINIU"],
      imageUrl: test,
    },
    {
      title: "Aluminiu",
      items: ["PVC", "ALUMINIU"],
      imageUrl: test,
    },
    {
      title: "Glisante",
      items: ["PVC", "ALUMINIU", "VEKA MOTION"],
      imageUrl: test,
    },
    {
      title: "Închideri Terase",
      items: ["ALUMINIU"],
      imageUrl: test,
    },
    {
      title: "Fațade",
      items: ["ALUMINIU"],
      imageUrl: test,
    },
    {
      title: "Export",
      items: ["ITALIA", "IRLANDA", "FRANȚA / BELGIA"],
      imageUrl: test,
    },
  ];

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
        {catalogItems.map((item) => (
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
