"use client";

import React, { useState } from "react";
import Image from "next/image";
import OfferButton from "@/app/components/buttons/OfferButton";
import styles from "@/app/styles/catalog-export/profilesSection.module.scss";
import { useTranslations } from "next-intl";

type ProfileCardProps = {
  profile: {
    id: number;
    image: string;
    title: Record<string, string>;
    description: Record<string, string>;
    characteristics: Record<string, string[]>;
  };
  activeToggle: "description" | "characteristics";
  onToggle: (id: number, toggle: "description" | "characteristics") => void;
  isEven: boolean;
  locale: string;
};

function ProfileCard({
  profile,
  activeToggle,
  onToggle,
  isEven,
  locale,
}: ProfileCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations();
  return (
    <div
      className={`${styles.profileCard} ${isEven ? styles.even : styles.odd}`}
    >
      <div className={styles.profileImageContainer}>
        {isLoading && <div className="imageBlur" />}
        <Image
          priority
          src={profile.image}
          alt={profile.title[locale]}
          fill
          sizes="(min-width: 1350px) 43%, (max-width: 860px) 81%"
          quality={80}
          className={`${styles.profileImage} ${isLoading ? "imageLoading" : ""}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className={styles.profileCardContent}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${
              activeToggle === "description" ? styles.activeTab : ""
            }`}
            onClick={() => onToggle(profile.id, "description")}
          >
            {t("togglers.description")}
          </button>
          <button
            type="button"
            className={`${styles.tab} ${
              activeToggle === "characteristics" ? styles.activeTab : ""
            }`}
            onClick={() => onToggle(profile.id, "characteristics")}
          >
            {t("togglers.characteristics")}
          </button>
        </div>
        <div className={styles.profileInfoBox}>
          <div className={styles.profileInfoTitle}>{profile.title[locale]}</div>
          {activeToggle === "description" ? (
            <div className={styles.profileDescription}>
              {profile?.description[locale]}
            </div>
          ) : (
            <ul className={styles.profileCharacteristics}>
              {profile.characteristics[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <OfferButton />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
