"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/landing/heroSection.module.scss";
import Image from "next/image";
import StarIcon from "@/app/components/svg-icons/StarIcon";
import LargeLogo from "@/app/components/svg-icons/logo/LargeLogo";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";
import OfferButton from "@/app/components/buttons/OfferButton";

function HeroSection({ content }) {
  const [isLoading, setIsLoading] = useState({ hero: true, review: true });
  const [randomReview, setRandomReview] = useState<{
    name: string;
    date: string;
    qualityText: string;
    text: string;
    src?: string;
  } | null>(null);
  const reviews = content.raw("heroSection.reviews");

  useEffect(() => {
    if (reviews.length > 0) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      setRandomReview(reviews[randomIndex]);
    }
  }, [reviews]);

  return (
    <section className={styles.heroSection}>
      {isLoading.hero && <div className="imageBlur" />}
      <Image
        priority
        src="/assets/images/hero-section.webp"
        alt="Hero section"
        // fill // test performance with removed fill
        sizes="100vw"
        height={100}
        width={100}
        quality={100}
        className={`${styles.heroSectionImage} ${isLoading.hero ? "imageLoading" : ""}`}
        onLoad={() =>
          setIsLoading((prevState) => ({ ...prevState, hero: false }))
        }
        style={{ contain: "paint" }} // for better loading
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
            {content("heroSection.qualityText")}
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
        {!!randomReview && (
          <div className={styles.imageMessageBox}>
            <div className={styles.imageBox}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "99px",
                  overflow: "hidden",
                }}
              >
                {isLoading.review && <div className="imageBlur" />}
                <Image
                  alt="Review avatar"
                  width={48}
                  height={48}
                  src={randomReview.src}
                  className={`${styles.reviewImage} ${isLoading.review ? "imageLoading" : ""}`}
                  onLoad={() =>
                    setIsLoading((prevState) => ({
                      ...prevState,
                      review: false,
                    }))
                  }
                />
              </div>
              <div className={styles.flexColumn}>
                <div className={styles.nameText}>{randomReview.name}</div>
                <div className={styles.dateText}>{randomReview.date}</div>
              </div>
            </div>
            <div className={styles.messageText}>{randomReview?.text || ""}</div>
          </div>
        )}
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
