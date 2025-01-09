"use client";

import React from "react";
import Image from "next/image";
import OfferButton from "@/app/components/buttons/OfferButton";
import styles from "@/app/styles/catalog-item/profilesSection.module.scss";

type ProfileCardProps = {
  profile: {
    id: number;
    image: string;
    title: string;
    description: string;
    characteristics: string[];
  };
  activeToggle: "description" | "characteristics";
  onToggle: (id: number, toggle: "description" | "characteristics") => void;
  isEven: boolean;
  togglers: { description: string; characteristics: string };
};

function ProfileCard({
  profile,
  activeToggle,
  onToggle,
  isEven,
  togglers,
}: ProfileCardProps) {
  return (
    <div
      className={`${styles.profileCard} ${isEven ? styles.even : styles.odd}`}
    >
      <Image
        priority
        src={profile.image}
        alt={profile.title}
        fill
        sizes="(min-width: 1350px) 43%, (max-width: 860px) 81%"
        quality={50}
        className={styles.profileImage}
      />
      <div className={styles.profileCardContent}>
        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${
              activeToggle === "description" ? styles.activeTab : ""
            }`}
            onClick={() => onToggle(profile.id, "description")}
          >
            {togglers.description}
          </button>
          <button
            type="button"
            className={`${styles.tab} ${
              activeToggle === "characteristics" ? styles.activeTab : ""
            }`}
            onClick={() => onToggle(profile.id, "characteristics")}
          >
            {togglers.characteristics}
          </button>
        </div>
        <div className={styles.profileInfoBox}>
          <div className={styles.profileInfoTitle}>{profile.title}</div>
          {activeToggle === "description" ? (
            <div className={styles.profileDescription}>
              {profile.description}
            </div>
          ) : (
            <ul className={styles.profileCharacteristics}>
              {profile.characteristics.map((item) => (
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
