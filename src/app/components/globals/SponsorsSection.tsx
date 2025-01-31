"use client";

import React from "react";
import styles from "@/app/styles/globals/sponsorsSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import manifest from "@/app/lib/assets-manifest.json";
import { v4 as uuidv4 } from "uuid";

const Marquee = dynamic(() =>
  import("react-fast-marquee").then((mod) => mod.default),
);

function SponsorsSection({ color }: { color: string }) {
  const t = useTranslations("sponsorSection");
  const sponsors = manifest.sponsors;

  return (
    <section className={styles.sponsorsSection} style={{ background: color }}>
      <div className={styles.sponsorsSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{t("title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.description}>
        {t.rich("description", {
          // eslint-disable-next-line react/no-unstable-nested-components
          b: (chunks) => <b key={uuidv4()}>{chunks}</b>,
        })}
      </div>
      <Marquee
        gradient
        gradientColor={color}
        gradientWidth={100}
        autoFill
        className={styles.marquee}
      >
        {sponsors.map((sponsor) => (
          <Image
            width={100}
            height={64}
            key={sponsor.alt}
            alt={sponsor.alt}
            src={sponsor.src}
            quality={60}
            className={styles.sponsorImage}
            priority
          />
        ))}
      </Marquee>
    </section>
  );
}

export default SponsorsSection;
