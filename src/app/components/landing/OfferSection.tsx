"use client";

import React from "react";
import styles from "@/app/styles/offerSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import OfferCard from "@/app/components/OfferCard";

function OfferSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Consultanție și Proiectare",
      description:
        "Managerii de vânzări vă vor ajuta să alegeți profilul, sticla, culoarea, feroneria pentru proiectul dumneavoastră. După care veți primi o ofertă de preț, cu toate detaliile discutate.",
    },
    {
      stepNumber: 2,
      title: "Măsurare",
      description:
        "La confirmarea comenzii, inginerul se va deplasa la dumneavoastră pentru a efectua măsurătorile finale.",
    },
    {
      stepNumber: 3,
      title: "Producere",
      description:
        "În funcție de complexitatea proiectului, termenul de execuție variază între 5 și 15 zile lucrătoare.",
    },
    {
      stepNumber: 4,
      title: "Instalare",
      description:
        "O echipă de montatori profesioniști se va deplasa la dumneavoastră pentru a vă instala tâmplăria în siguranță.",
    },
  ];

  return (
    <div className={styles.offerSection}>
      <div className={styles.titleBox}>
        <div className={styles.offerSectionTitle}>
          <BlinkIcon color="#18437E" />
          <div>Ce oferim?</div>
          <BlinkIcon color="#18437E" />
        </div>
      </div>
      <div className={styles.stepsContainer}>
        {steps.map((step) => (
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
