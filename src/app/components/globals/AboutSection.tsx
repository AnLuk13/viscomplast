"use client";

import React from "react";
import styles from "@/app/styles/globals/aboutSection.module.scss";
import "react-phone-input-2/lib/style.css";
import AboutImage from "@/app/components/globals/about/AboutImage";
import AboutForm from "@/app/components/globals/about/AboutForm";
import AboutContent from "@/app/components/globals/about/AboutContent";

function AboutSection({ showAboutInfo }: boolean) {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.gridContainer}>
        {showAboutInfo && (
          <>
            <AboutImage src="/assets/images/office-viscomplast.png" />
            <AboutContent />
          </>
        )}
        <AboutForm />
        <AboutImage src="/assets/images/office.png" />
      </div>
    </section>
  );
}

export default AboutSection;
