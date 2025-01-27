"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/typesSection.module.scss";
import Image from "next/image";

type TypeCardProps = {
  src: string;
  name: string;
  description: string;
  hex: string;
};
function TypeCard({ src, name, description, hex }: TypeCardProps) {
  console.log(src);
  return (
    <div className={styles.typeCard}>
      {src ? (
        <Image
          priority
          src={src}
          alt="Hero section"
          quality={100}
          width={230}
          height={230}
          className={styles.cardImage}
        />
      ) : (
        <div className={styles.cardImage} style={{ background: hex }} />
      )}
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
