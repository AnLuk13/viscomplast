"use client";

import React, { useEffect } from "react";
import LanguageDropdown from "@/app/components/header/LanguageDropdown";
import { navTabs, socialLinks } from "@/app/lib/consts/common";
import DropdownMenu from "@/app/components/header/DropdownMenu";
import { Link } from "@/i18n/routing";
import ScheduleBox from "@/app/components/header/ScheduleBox";
import styles from "../../styles/header/heading.module.scss";

interface DesktopMenuProps {
  isMobileNav: boolean;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  handleItemClick: () => void;
}

function MobileMenu({
  isMobileNav,
  activeDropdown,
  setActiveDropdown,
  handleItemClick,
}: DesktopMenuProps) {
  useEffect(() => {
    const handleResize = () => {
      if (isMobileNav && window.innerWidth <= 1200) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileNav]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className={`${styles.mobileMenu} ${!isMobileNav ? "" : styles.show}`}>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileNavTabsContainer}>
          {navTabs.map((item) => (
            <div
              key={item.label}
              className={
                item.type === "dropdown" ? styles.dropdown : styles.fitContent
              }
            >
              {item.type === "link" ? (
                <Link
                  href={item.href!}
                  className={styles.navigationLinks}
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.defaultValue!.label)}
                    className={styles.navigationLinks}
                  >
                    {item.defaultValue?.label} ↓
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
        </div>
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
            <LanguageDropdown isMobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
