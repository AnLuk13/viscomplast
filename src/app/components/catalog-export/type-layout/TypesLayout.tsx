"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeCard from "@/app/components/catalog-export/type-layout/TypeCard";

type TypeLayoutProps = {
  data: {
    id: number;
    src?: string | undefined;
    name: string;
    description?: string | undefined;
    hex?: string | undefined;
  }[];
  title: string;
};
function TypesLayout({ data, title }: TypeLayoutProps) {
  return (
    <div className="sectionContainer">
      <div className={styles.typesSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{title}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.cardsBox}>
        {data.map((card) => (
          <TypeCard
            key={card.id}
            src={card.src || ""}
            name={card.name}
            description={card.description || ""}
            hex={card.hex || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default TypesLayout;
