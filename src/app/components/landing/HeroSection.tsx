"use client";

import React, { useState } from "react";
import styles from "@/app/styles/landing/heroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import LargeLogo from "@/app/components/svg-icons/logo/LargeLogo";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";
import OfferButton from "@/app/components/buttons/OfferButton";

function HeroSection({ content }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className={styles.heroSection}>
      {isLoading && <div className="imageBlur" />}
      <Image
        priority
        src="/assets/images/hero-section.jpg"
        alt="Hero section"
        fill
        sizes="100vw"
        quality={100}
        className={`${styles.heroSectionImage} ${isLoading ? "loading" : ""}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="fadeBackground" />
      <div className={styles.heroSectionBox}>
        <div className={styles.qualityStars}>
          {Array(5)
            .fill(undefined, undefined, undefined)
            .map(() => (
              <StarIcon key={Math.random()} />
            ))}
          <div className={styles.qualityText}>
            {content("heroSection.review.qualityText")}
          </div>
        </div>
        <div className={styles.heroSectionContent}>
          <div>
            <div className={styles.heroSectionContentTitle}>
              {content("heroSection.titleLine1")}
            </div>
            <div className={styles.heroSectionContentTitle}>
              {content("heroSection.titleLine2")}
            </div>
          </div>
          <OfferButton />
        </div>
      </div>
      <div className={styles.reviewBox}>
        <div className={styles.imageMessageBox}>
          <div className={styles.imageBox}>
            <Image
              alt="Logo"
              width={48}
              height={48}
              src="/assets/images/review.png"
              className={styles.reviewImage}
            />
            <div className={styles.flexColumn}>
              <div className={styles.nameText}>
                {content("heroSection.review.name")}
              </div>
              <div className={styles.dateText}>
                {content("heroSection.review.date")}
              </div>
            </div>
          </div>
          <div className={styles.messageText}>
            {content("heroSection.review.text")}
          </div>
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
