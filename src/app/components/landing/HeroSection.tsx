"use client";

import React from "react";
import styles from "@/app/styles/heroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import { useTranslations } from "next-intl";
import LargeLogo from "@/app/components/svg-icons/logo/LargeLogo";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";

function HeroSection() {
  const t = useTranslations("home.heroSection");
  return (
    <section className={styles.heroSection}>
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
          <div className={styles.qualityText}>{t("review.qualityText")}</div>
        </div>
        <div className={styles.heroSectionContent}>
          <div>
            <div className={styles.heroSectionContentTitle}>
              {t("titleLine1")}
            </div>
            <div className={styles.heroSectionContentTitle}>
              {t("titleLine2")}
            </div>
          </div>
          <button className={styles.actionButton} type="button">
            {t("buttonText")} <ArrowIcon />
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
              <div className={styles.nameText}>{t("review.name")}</div>
              <div className={styles.dateText}>{t("review.date")}</div>
            </div>
          </div>
          <div className={styles.messageText}>{t("review.text")}</div>
        </div>
        <div
          className={styles.logoBox}
          style={
            useIsLargeScreen(860)
              ? { height: 132, width: 172, borderRadius: "64px 0 0 0" }
              : { height: 80, width: 100, borderRadius: "36px 0 0 0" }
          }
        >
          <LargeLogo width={useIsLargeScreen(860) ? 126 : 72} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
