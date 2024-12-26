"use client";

import React from "react";
import styles from "./mobileMenu.module.scss";

interface MobileMenuProps {
  showMobileSidebar: boolean;
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

function BurgerMenu({
  showMobileSidebar,
  setShowMobileSidebar,
  setActiveDropdown,
}: MobileMenuProps) {
  return (
    <div
      className={`${styles.mobileMenuIcon} ${
        !showMobileSidebar ? styles.active : ""
      }`}
      onClick={() => {
        setShowMobileSidebar((prev) => !prev);
        setActiveDropdown(null);
      }}
    >
      {Array.from({ length: 2 + (showMobileSidebar ? 1 : 0) }, (_, i) => (
        <div
          key={i}
          className={
            i === 0 ? styles.firstbar : i === 1 ? styles.secondbar : ""
          }
        />
      ))}
    </div>
  );
}

export default BurgerMenu;
