import React from "react";
import styles from "@/app/styles/catalog-item/typesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeCard from "@/app/components/catalog-item/type-layout/TypeCard";

type TypeLayoutProps = {
  data: {
    id: number;
    imageSrc: string;
    name: string;
    description?: string | undefined;
  }[];
  title: string;
};
function TypesSection({ data, title }: TypeLayoutProps) {
  return (
    <div className={styles.typesSection}>
      <div className={styles.typesSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{title}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.cardsBox}>
        {data.map((card) => (
          <TypeCard
            key={card.id}
            imageSrc={card.imageSrc}
            name={card.name}
            description={card.description || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default TypesSection;
