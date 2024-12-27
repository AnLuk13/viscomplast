"use client";

import React from "react";
import styles from "@/app/styles/aboutSection.module.scss";
import "react-phone-input-2/lib/style.css";
import AboutImage from "@/app/components/AboutImage";
import AboutForm from "@/app/components/AboutForm";
import AboutContent from "@/app/components/AboutContent";

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.gridContainer}>
        <AboutImage src="/assets/images/office-viscomplast.png" />
        <AboutContent />
        <AboutForm />
        <AboutImage src="/assets/images/office.png" />
      </div>
    </section>
  );
}

export default AboutSection;
