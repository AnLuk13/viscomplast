import React from "react";
import styles from "@/app/styles/catalog-item/typesSection.module.scss";
import Image from "next/image";

type TypeCardProps = {
  imageSrc: string;
  name: string;
  description: string;
};
function TypeCard({ imageSrc, name, description }: TypeCardProps) {
  return (
    <div className={styles.typeCard}>
      <Image
        priority
        src={imageSrc}
        alt="Hero section"
        quality={100}
        width={230}
        height={230}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardText} style={{ fontWeight: 700 }}>
          {name}
        </div>
        {description && <div className={styles.cardText}>{description}</div>}
      </div>
    </div>
  );
}

export default TypeCard;
