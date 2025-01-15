"use client";

import React from "react";
import styles from "@/app/styles/sliding-systems/slidingSystemsSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeGalleryCard from "@/app/components/sliding-systems/type-gallery-layout/TypeGalleryCard";

function SlidingSystemsSection() {
  return (
    <section className="sectionContainer">
      <div className={styles.slidingSystemsSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>Glisante</div>
        {/* here */}
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        Sistemul WHS by VEKA combină în mod optim practicitatea și
        accesibilitatea. Este proiectat pentru fabricarea ferestrelor în
        configurații standard pentru consumatori. Utilizarea sistemelor de
        profil cu 6 camere și a geamurilor termopan eficiente din punct de
        vedere energetic vă permite să oferiți nivelul necesar de confort în
        casa dumneavoastră. Sistemele WHS by VEKA permit instalarea de geamuri
        termopan cu protecție sporită împotriva zgomotului.
      </div>
      <TypeGalleryCard
        title="Tip 1"
        description="Sistemul WHS by VEKA combină în mod optim practicitatea și accesibilitatea. Este proiectat pentru fabricarea ferestrelor în configurații standard pentru consumatori."
      />
    </section>
  );
}

export default SlidingSystemsSection;
