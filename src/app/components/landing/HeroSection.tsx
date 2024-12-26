"use client";

import React from "react";
import styles from "@/app/styles/heroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import Logo from "@/app/components/svg-icons/Logo";

function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Image
        priority
        src="/assets/images/hero-section.png"
        alt="Hero section"
        fill
        sizes="100vw"
        quality={100}
        className={styles.heroSectionImage}
      />
      <div className={styles.heroSectionBox}>
        <div className={styles.qualityStars}>
          {Array(5)
            .fill(undefined, undefined, undefined)
            .map(() => (
              <StarIcon key={Math.random()} />
            ))}
          <div className={styles.qualityText}>excelent</div>
        </div>
        <div className={styles.heroSectionContent}>
          <div>
            <div className={styles.heroSectionContentTitle}>
              Ferestre și uși
            </div>
            <div className={styles.heroSectionContentTitle}>
              din PVC și aluminiu
            </div>
          </div>
          <button className={styles.actionButton} type="button">
            Solicită oferta <ArrowIcon />
          </button>
        </div>
      </div>
      <div className={styles.reviewBox}>
        <div className={styles.imageMessageBox}>
          <div className={styles.imageBox}>
            <Image
              sizes="100vw"
              alt="Logo"
              width={48}
              height={48}
              src="/assets/images/review.png"
              className={styles.reviewImage}
            />
            <div className={styles.flexColumn}>
              <div className={styles.nameText}>Emilia C.</div>
              <div className={styles.dateText}>28.03.2024</div>
            </div>
          </div>
          <div className={styles.messageText}>
            “Un review hardcodat de la un user foarte satisfacut de serviciile
            companiei VISCOMPLAST.”
          </div>
        </div>
        <div className={styles.logoBox}>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
