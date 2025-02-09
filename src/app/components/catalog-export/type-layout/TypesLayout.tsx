"use client";

import type { CSSProperties } from "react";
import React from "react";
import styles from "@/app/styles/catalog-export/typesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeCard from "@/app/components/catalog-export/type-layout/TypeCard";

type TypesLayoutProps = {
  data: {
    id: number;
    src?: string | undefined;
    name: string | Record<string, string>;
    description?: string | undefined;
    hex?: string | undefined;
  }[];
  title: string | Record<string, string>;
  locale?: string;
  imgStyles: CSSProperties;
};
function TypesLayout({ data, title, locale, imgStyles }: TypesLayoutProps) {
  return (
    <div className="sectionContainer">
      <div className={styles.typesSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{typeof title === "object" ? title[locale] : title}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.cardsBox}>
        {data.map((card) => (
          <TypeCard
            key={card.id}
            src={card.src || ""}
            name={typeof card.name === "object" ? card.name[locale] : card.name}
            description={card.description || ""}
            hex={card.hex || ""}
            imgStyles={imgStyles}
          />
        ))}
      </div>
    </div>
  );
}

export default TypesLayout;
