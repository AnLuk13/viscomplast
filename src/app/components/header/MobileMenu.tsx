"use client";

import React, { useEffect, useState } from "react";
import LanguageDropdown from "@/app/components/header/LanguageDropdown";
import { navTabs, socialLinks } from "@/app/lib/consts/common";
import DropdownMenu from "@/app/components/header/DropdownMenu";
import { Link } from "@/i18n/routing";
import ScheduleBox from "@/app/components/header/ScheduleBox";
import styles from "./heading.module.scss";

interface DesktopMenuProps {
  showMobileSidebar: boolean;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  handleItemClick: () => void;
}

function MobileMenu({
  showMobileSidebar,
  activeDropdown,
  setActiveDropdown,
  handleItemClick,
}: DesktopMenuProps) {
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (!showMobileSidebar && window.innerWidth <= 1200) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      setIsTwoColumn(window.innerHeight < 650);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [showMobileSidebar]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div
      className={`${styles.mobileMenu} ${showMobileSidebar ? "" : styles.show}`}
    >
      {navTabs.map((item) => (
        <div
          key={item.label}
          className={item.type === "dropdown" ? styles.dropdown : ""}
        >
          {item.type === "link" ? (
            <Link href={item.href!} className={styles.navigationLinks}>
              {item.label}
            </Link>
          ) : (
            <>
              <button
                type="button"
                onClick={() => toggleDropdown(item.defaultValue!.label)}
                className={styles.navigationLinks}
              >
                {item.defaultValue?.label} ▼
              </button>
              {activeDropdown === item.defaultValue?.label && (
                <DropdownMenu
                  items={item.options!.map((option) => ({
                    label: option.label,
                    path: `/${option.value}`,
                  }))}
                  handleItemClick={handleItemClick}
                />
              )}
            </>
          )}
        </div>
      ))}
      <div className={styles.detailsContainer}>
        <ScheduleBox props={{ display: "block" }} />
        <div className={styles.socialsLanguageBox}>
          <div className={styles.mobileSocialLinks}>
            {socialLinks.map(({ href, Icon }) => (
              <a key={href} href={href}>
                <Icon />
              </a>
            ))}
          </div>
          <LanguageDropdown showMobileSidebar={showMobileSidebar} />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
