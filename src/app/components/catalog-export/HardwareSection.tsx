"use client";

import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "@/app/styles/catalog-export/hardwareSection.module.scss";

function HardwareSection({ data, locale }) {
  return (
    <div className="sectionContainer">
      <div className={styles.hardwareSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{data?.title[locale]}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.hardwareSectionDescription}>
        {data?.description[locale]}
      </div>
    </div>
  );
}

HardwareSection.displayName = "HardwareSection";
export default HardwareSection;
