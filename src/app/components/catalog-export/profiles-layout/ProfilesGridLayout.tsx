"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/profilesSection.module.scss";
import ProfileCard from "@/app/components/catalog-export/profiles-layout/ProfileCard";

type ProfilesGridProps = {
  profiles: {
    id: number;
    image: string;
    title: Record<string, string>;
    description: Record<string, string>;
    characteristics: Record<string, string[]>;
  }[];
  activeToggles: Record<number, "description" | "characteristics">;
  onToggle: (id: number, toggle: "description" | "characteristics") => void;
  togglers: {
    description: Record<string, string>;
    characteristics: Record<string, string>;
  };
  locale: string;
};

function ProfilesGridLayout({
  profiles,
  activeToggles,
  onToggle,
  togglers,
  locale,
}: ProfilesGridProps) {
  return (
    <div className={styles.profilesGrid}>
      {profiles?.map((profile, index) => (
        <ProfileCard
          togglers={togglers}
          key={profile.id}
          profile={profile}
          activeToggle={activeToggles[profile.id]}
          onToggle={onToggle}
          isEven={index % 2 === 0}
          locale={locale}
        />
      ))}
    </div>
  );
}

export default ProfilesGridLayout;
