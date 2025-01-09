"use client";

import React from "react";
import styles from "@/app/styles/landing/catalogSection.module.scss";
import CatalogCard from "@/app/components/landing/catalog/CatalogCard";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";

function CatalogSection({ content }) {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.titleBox}>
        <div className={styles.catalogSectionTitle}>
          <BlinkIcon color="#F3F8FF" />
          <div>
            {content.rich("catalogSection.title", {
              // eslint-disable-next-line react/no-unstable-nested-components
              b: (chunk) => <b>{chunk}</b>,
            })}
          </div>
          <BlinkIcon color="#F3F8FF" />
        </div>
      </div>
      <div className={styles.gridContainer}>
        {content.raw("catalogSection.catalogCards").map((item) => (
          <CatalogCard
            key={item.title}
            title={item.title}
            items={item.items}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;
