"use client";

import Logo from "@/app/components/svg-icons/logo/Logo";
import PhoneIcon from "@/app/components/svg-icons/PhoneIcon";
import LanguageDropdown from "@/app/components/header/LanguageDropdown";
import { Link } from "@/i18n/routing";
import CustomDropdown from "@/app/components/header/CustomDropdown";
import React, { useState } from "react";
import BurgerMenu from "@/app/components/header/BurgerMenu";
import MobileMenu from "@/app/components/header/MobileMenu";
import ScheduleBox from "@/app/components/header/ScheduleBox";
import { navTabs, socialLinks } from "@/app/lib/consts/common";
import type { NavTab } from "@/app/lib/consts/types";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";
import styles from "../../styles/header/heading.module.scss";

function Heading() {
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isLargeScreen = useIsLargeScreen();

  const handleItemClick = () => {
    setIsMobileNav(false);
    setActiveDropdown(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <div className={styles.headerContentBox}>
          <div className={styles.logoScheduleBox}>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Logo width={isLargeScreen ? 84 : 72} />
            </Link>
            <ScheduleBox props={{}} />
          </div>
          <div className={styles.socialBox}>
            <div className={styles.phoneContainer}>
              {["060466177", "060414041"].map((phone) => (
                <div key={phone} className={styles.phoneBox}>
                  <div className={styles.phoneIconBox}>
                    <PhoneIcon />
                  </div>
                  <a href={`tel:${phone}`} className={styles.phoneText}>
                    {phone}
                  </a>
                </div>
              ))}
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map(({ href, Icon }) => (
                <a key={href} href={href}>
                  <Icon />
                </a>
              ))}
            </div>
            <div className={styles.languageDropdown}>
              <LanguageDropdown isMobileNav={false} />
            </div>
            <BurgerMenu
              isMobileNav={isMobileNav}
              setIsMobileNav={setIsMobileNav}
              setActiveDropdown={setActiveDropdown}
            />
          </div>
        </div>
      </div>
      <MobileMenu
        isMobileNav={isMobileNav}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        handleItemClick={handleItemClick}
      />
      <nav className={styles.navigationSection}>
        <div className={styles.navigationContent}>
          {navTabs.map((tab: NavTab) =>
            tab.type === "link" ? (
              <Link
                key={tab.label}
                className={styles.navLink}
                href={tab.href || "/"}
              >
                {tab.label}
              </Link>
            ) : (
              <CustomDropdown
                key={tab.label}
                options={tab.options || []}
                defaultValue={tab.defaultValue!}
              />
            ),
          )}
        </div>
      </nav>
    </header>
  );
}

export default Heading;
