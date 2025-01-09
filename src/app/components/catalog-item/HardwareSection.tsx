"use client";

import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "../../styles/catalog-item/hardwareSection.module.scss";

function HardwareSection({ content }) {
  return (
    <div className={styles.hardwareSection}>
      <div className={styles.hardwareSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("hardwareSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.hardwareSectionDescription}>
        {content("hardwareSection.description")}
      </div>
    </div>
  );
}

export default HardwareSection;
