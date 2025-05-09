"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/catalog-export/profilesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import ProfilesGridLayout from "@/app/components/catalog-export/profiles-layout/ProfilesGridLayout";

function ProfilesSection({ data, locale }) {
  const profiles = Array.isArray(data?.profiles) ? data.profiles : [];
  const [activeToggles, setActiveToggles] = useState<
    Record<number, "description" | "characteristics">
  >({});

  useEffect(() => {
    if (profiles.length > 0) {
      setActiveToggles(
        profiles.reduce(
          (acc: Record<number, "description" | "characteristics">, profile) => {
            acc[profile.id] = "description";
            return acc;
          },
          {},
        ),
      );
    }
  }, [profiles]);

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
        <div>{data?.sectionTitle[locale]}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.profilesContainer}>
        <ProfilesGridLayout
          profiles={profiles}
          activeToggles={activeToggles}
          onToggle={handleToggle}
          locale={locale}
        />
      </div>
    </div>
  );
}

ProfilesSection.displayName = "ProfilesSection";
export default ProfilesSection;
