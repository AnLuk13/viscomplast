import React from "react";
import styles from "@/app/styles/globals/offerSection.module.scss";

function OfferCard({
  cardColor,
  stepNumber,
  title,
  description,
}: {
  cardColor: string;
  stepNumber: number;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.offerCard}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <div className={styles.card} style={{ background: cardColor }}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
