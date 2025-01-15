import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "@/app/styles/globals/aboutSection.module.scss";
import { v4 as uuidv4 } from "uuid";

function AboutContent({ content }) {
  return (
    <div className={`${styles.card} ${styles.contentBox}`}>
      <div className={styles.aboutSectionTitle}>
        <BlinkIcon color="#f3f8ff" />
        <div>{content("aboutSection.aboutTitle")}</div>
        <BlinkIcon color="#f3f8ff" />
      </div>
      <div className={styles.descriptionBox}>
        {content.raw("aboutSection.aboutDescription").map((descriptionText) => (
          <div key={uuidv4()} className={styles.description}>
            {descriptionText}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutContent;
