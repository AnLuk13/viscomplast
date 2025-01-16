"use client";

import React, { useState } from "react";
import styles from "@/app/styles/catalog-export/profilesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import ProfilesGridLayout from "@/app/components/catalog-export/profiles-layout/ProfilesGridLayout";

function ProfilesSection({ content }) {
  const profiles = content.raw("profilesSection.profiles");
  const togglers = content.raw("profilesSection.togglers");
  const [activeToggles, setActiveToggles] = useState<
    Record<number, "description" | "characteristics">
  >(() =>
    profiles.reduce(
      (acc: Record<number, "description" | "characteristics">, profile) => {
        acc[profile.id] = "description"; // Assign the initial state for each profile
        return acc;
      },
      {} as Record<number, "description" | "characteristics">, // Provide the initial value with the correct type
    ),
  );

  const handleToggle = (
    id: number,
    toggle: "description" | "characteristics",
  ) => {
    setActiveToggles((prev) => ({ ...prev, [id]: toggle }));
  };

  return (
    <div className={styles.profilesSection}>
      <div className={styles.profilesSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("profilesSection.sectionTitle")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.profilesContainer}>
        <ProfilesGridLayout
          togglers={togglers}
          profiles={profiles}
          activeToggles={activeToggles}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

export default ProfilesSection;
