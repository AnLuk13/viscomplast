"use client";

import React from "react";
import styles from "@/app/styles/catalog-export/profilesSection.module.scss";
import ProfileCard from "@/app/components/catalog-export/profiles-layout/ProfileCard";

type ProfilesGridProps = {
  profiles: {
    id: number;
    image: string;
    title: string;
    description: string;
    characteristics: string[];
  }[];
  activeToggles: Record<number, "description" | "characteristics">;
  onToggle: (id: number, toggle: "description" | "characteristics") => void;
  togglers: { description: string; characteristics: string };
};

function ProfilesGridLayout({
  profiles,
  activeToggles,
  onToggle,
  togglers,
}: ProfilesGridProps) {
  return (
    <div className={styles.profilesGrid}>
      {profiles.map((profile, index) => (
        <ProfileCard
          togglers={togglers}
          key={profile.id}
          profile={profile}
          activeToggle={activeToggles[profile.id]}
          onToggle={onToggle}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
}

export default ProfilesGridLayout;
