"use client";

import Logo from "@/app/components/svg-icons/Logo";
import PhoneIcon from "@/app/components/svg-icons/PhoneIcon";
import LanguageDropdown from "@/app/components/header/LanguageDropdown";
import { Link } from "@/i18n/routing";
import CustomDropdown from "@/app/components/CustomDropdown";
import React, { useState } from "react";
import BurgerMenu from "@/app/components/header/BurgerMenu";
import MobileMenu from "@/app/components/header/MobileMenu";
import ScheduleBox from "@/app/components/header/ScheduleBox";
import { navTabs, socialLinks } from "@/app/lib/consts/common";
import styles from "./heading.module.scss";

function Heading() {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleItemClick = () => {
    setShowMobileSidebar(true);
    setActiveDropdown(null);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <div className={styles.headerContentBox}>
          <div className={styles.logoScheduleBox}>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Logo />
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
                  <div className={styles.phoneText}>{phone}</div>
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
              <LanguageDropdown showMobileSidebar />
            </div>
            <BurgerMenu
              showMobileSidebar={showMobileSidebar}
              setShowMobileSidebar={setShowMobileSidebar}
              setActiveDropdown={setActiveDropdown}
            />
          </div>
        </div>
      </div>
      <MobileMenu
        showMobileSidebar={showMobileSidebar}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        handleItemClick={handleItemClick}
      />
      <nav className={styles.navigationSection}>
        <div className={styles.navigationContent}>
          {navTabs.map((tab) =>
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
                defaultValue={tab.defaultValue}
              />
            ),
          )}
        </div>
      </nav>
    </header>
  );
}

export default Heading;
