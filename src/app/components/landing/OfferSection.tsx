"use client";

import React from "react";
import styles from "@/app/styles/offerSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import OfferCard from "@/app/components/OfferCard";
import { offerSteps } from "@/app/lib/consts/common";

function OfferSection() {
  return (
    <div className={styles.offerSection}>
      <div className={styles.titleBox}>
        <div className={styles.offerSectionTitle}>
          <BlinkIcon color="#18437E" />
          <div>Ce servicii oferim?</div>
          <BlinkIcon color="#18437E" />
        </div>
      </div>
      <div className={styles.stepsContainer}>
        {offerSteps.map((step) => (
          <OfferCard
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
