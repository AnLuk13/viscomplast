"use client";

import React from "react";
import styles from "@/app/styles/globals/aboutSection.module.scss";
import "react-phone-input-2/lib/style.css";
import AboutImage from "@/app/components/globals/about/AboutImage";
import AboutForm from "@/app/components/globals/about/AboutForm";
import AboutContent from "@/app/components/globals/about/AboutContent";
import { useTranslations } from "next-intl";

function AboutSection({ showAboutInfo }: { showAboutInfo: boolean }) {
  const t = useTranslations("aboutSection");
  return (
    <section className={styles.aboutSection}>
      <div className={styles.gridContainer}>
        {showAboutInfo && (
          <>
            <AboutImage
              src="/assets/images/about-us/about-us.jpg"
              styleProps={{ objectPosition: -20 }}
            />
            <AboutContent content={t} />
          </>
        )}
        <AboutForm content={t} />
        <AboutImage src="/assets/images/about-us/office-viscomplast.jpg" />
      </div>
    </section>
  );
}

export default AboutSection;
