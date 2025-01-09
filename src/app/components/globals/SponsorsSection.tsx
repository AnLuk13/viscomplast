"use client";

import React from "react";
import styles from "@/app/styles/globals/sponsorsSection.module.scss";
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

function SponsorsSection({ content, color }: { color: string }) {
  const sponsors = [
    { src: ramplast, alt: "Ramplast" },
    { src: veka, alt: "Veka" },
    { src: gealan, alt: "Gealan" },
    { src: kurtoglu, alt: "Kurtoglu" },
  ];

  return (
    <section className={styles.sponsorsSection} style={{ background: color }}>
      <div className={styles.sponsorsSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("sponsorSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        {content.rich("sponsorSection.description", {
          // eslint-disable-next-line react/no-unstable-nested-components
          PVC: (chunks) => <b key="PVC">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          ALUMINIU: (chunks) => <b key="ALUMINIU">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          RAMPLAST: (chunks) => <b key="RAMPLAST">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          GEALAN: (chunks) => <b key="GEALAN">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          VEKA: (chunks) => <b key="VEKA">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          KURTOGLU: (chunks) => <b key="KURTOGLU">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          WINKHAUS: (chunks) => <b key="WINKHAUS">{chunks}</b>,
          // eslint-disable-next-line react/no-unstable-nested-components
          GU: (chunks) => <b key="GU">{chunks}</b>,
        })}
      </div>
      <Marquee
        gradient
        gradientColor={color}
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
    </section>
  );
}

export default SponsorsSection;
