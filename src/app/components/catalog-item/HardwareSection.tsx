"use client";

import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "../../styles/catalog-item/hardwareSection.module.scss";

function HardwareSection() {
  return (
    <div className={styles.hardwareSection}>
      <div className={styles.sectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>Feronerie</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.hardwareSectionDescription}>
        Sistemul WHS by VEKA combină în mod optim practicitatea și
        accesibilitatea. Este proiectat pentru fabricarea ferestrelor în
        configurații standard pentru consumatori. Utilizarea sistemelor de
        profil cu 6 camere și a geamurilor termopan eficiente din punct de
        vedere energetic vă permite să oferiți nivelul necesar de confort în
        casa dumneavoastră. Sistemele WHS by VEKA permit instalarea de geamuri
        termopan cu protecție sporită împotriva zgomotului.
      </div>
    </div>
  );
}

export default HardwareSection;
