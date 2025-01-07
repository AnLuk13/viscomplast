"use client";

import React, { useState } from "react";
import styles from "@/app/styles/catalog-item/profilesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import ProfilesGridLayout from "@/app/components/catalog-item/profiles-layout/ProfilesGridLayout";

const profiles = [
  {
    id: 1,
    image: "/assets/images/office.png",
    title: "Profilul WHS by VEKA",
    description:
      "Sistemul WHS by VEKA combină în mod optim practicitatea și accesibilitatea. Este proiectat pentru fabricarea ferestrelor în configurații standard pentru consumatori.",
    characteristics: [
      "Marcă România",
      "Profil Clasa B",
      "Adâncime de 60 mm",
      "4 camere",
      "Etanșare în două rânduri de garnituri",
      "Pantă interioară de 5 grade",
      "Două rânduri de sticlă de 24mm",
      "Feronerie germană Winkhaus",
      "Armătură de oțel zincat de 1,5mm",
      "Coeficient termic de 1,67 W/m2K",
    ],
  },
  {
    id: 2,
    image: "/assets/images/office.png",
    title: "Profilul KBE by VEKA",
    description:
      "Sistemul KBE by VEKA oferă performanțe excelente și eficiență energetică. Este ideal pentru proiecte rezidențiale moderne.",
    characteristics: [
      "Marcă Germania",
      "Profil Clasa A",
      "Adâncime de 70 mm",
      "5 camere",
      "Izolare fonică și termică avansată",
      "Geam termoizolant de 44mm",
      "Feronerie germană GU",
      "Armătură de oțel zincat de 2mm",
      "Coeficient termic de 1,5 W/m2K",
    ],
  },
  {
    id: 3,
    image: "/assets/images/office.png",
    title: "Profilul Salamander",
    description:
      "Sistemul Salamander oferă un design elegant și rezistență ridicată. Perfect pentru case moderne și clădiri comerciale.",
    characteristics: [
      "Marcă Germania",
      "Profil Clasa A+",
      "Adâncime de 82 mm",
      "6 camere",
      "Izolare fonică de până la 48dB",
      "Geam termoizolant triplu",
      "Feronerie germană Roto",
      "Coeficient termic de 1,2 W/m2K",
    ],
  },
];

function ProfilesSection() {
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
      <div className={styles.sectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>Profiluri</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.profilesContainer}>
        <ProfilesGridLayout
          profiles={profiles}
          activeToggles={activeToggles}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

export default ProfilesSection;
