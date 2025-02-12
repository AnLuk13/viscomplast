import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "@/app/styles/globals/aboutSection.module.scss";

function AboutContent({ content }) {
  return (
    <div className={`${styles.card} ${styles.contentBox}`}>
      <div className={styles.aboutSectionTitle}>
        <BlinkIcon color="#f3f8ff" />
        <div>{content("aboutTitle")}</div>
        <BlinkIcon color="#f3f8ff" />
      </div>
      <div className={styles.descriptionBox}>
        {content.raw("aboutDescription").map((descriptionText) => (
          <div
            key={descriptionText.trim().slice(0, 10)}
            className={styles.description}
          >
            {descriptionText}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutContent;
