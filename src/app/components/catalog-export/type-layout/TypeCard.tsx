"use client";

import React, { useState } from "react";
import styles from "@/app/styles/catalog-export/typesSection.module.scss";
import Image from "next/image";

type TypeCardProps = {
  src: string;
  name: string;
  description: string;
  hex: string;
};
function TypeCard({ src, name, description, hex }: TypeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.typeCard}>
      {src ? (
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px 24px 0 0",
          }}
        >
          {isLoading && <div className="imageBlur" />}
          <Image
            priority
            src={src}
            alt="Image type"
            quality={100}
            width={230}
            height={230}
            className={`${styles.cardImage} ${isLoading ? "loading" : ""}`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
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
