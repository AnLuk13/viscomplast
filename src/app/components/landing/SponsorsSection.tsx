"use client";

import React from "react";
import styles from "@/app/styles/sponsorsSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import ramplast from "../../../../public/assets/images/sponsors/ramplast.png";
import veka from "../../../../public/assets/images/sponsors/veka.png";
import gealan from "../../../../public/assets/images/sponsors/gealan.png";
import kurtoglu from "../../../../public/assets/images/sponsors/kurtoglu.png";

const Marquee = dynamic(() =>
  import("react-fast-marquee").then((mod) => mod.default),
);

function SponsorsSection() {
  const sponsors = [
    { src: ramplast, alt: "Ramplast" },
    { src: veka, alt: "Veka" },
    { src: gealan, alt: "Gealan" },
    { src: kurtoglu, alt: "Kurtoglu" },
  ];

  return (
    <div className={styles.sponsorsSection}>
      <div className={styles.sponsorsSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>Partenerii noștri</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        Oferim o gamă completă de servicii pentru producția și instalarea
        structurilor <b>PVC</b> și <b>ALUMINIU</b> utilizând sisteme de profil
        <b> RAMPLAST</b>, <b>GEALAN</b>, <b>VEKA</b> și <b>KURTOGLU</b>. La
        fabricarea structurilor utilizăm doar feronerie de înaltă calitate
        <b> WINKHAUS</b> și <b>G-U</b>.
      </div>
      <Marquee
        gradient
        gradientColor="#e3efff"
        gradientWidth={100}
        autoFill
        className={styles.marquee}
      >
        {sponsors.map((sponsor, index) => (
          <Image
            key={sponsor.alt}
            alt={sponsor.alt}
            src={sponsor.src}
            quality={40}
            className={styles.sponsorImage}
            priority
          />
        ))}
      </Marquee>
    </div>
  );
}

export default SponsorsSection;
