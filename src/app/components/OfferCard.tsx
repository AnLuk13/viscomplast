import React from "react";
import styles from "@/app/styles/offerSection.module.scss";

function OfferCard({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.offerCard}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardDescription}>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
