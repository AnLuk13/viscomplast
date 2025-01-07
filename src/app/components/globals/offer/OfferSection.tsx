"use client";

import React from "react";
import styles from "@/app/styles/globals/offerSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import OfferCard from "@/app/components/globals/offer/OfferCard";
import { offerSteps } from "@/app/lib/consts/common";

function OfferSection({ color }: string) {
  return (
    <section className={styles.offerSection} style={{ background: color }}>
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
    </section>
  );
}

export default OfferSection;
