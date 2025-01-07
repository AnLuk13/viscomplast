"use client";

import React from "react";
import styles from "@/app/styles/footer/footer.module.scss";
import LargeLogo from "@/app/components/svg-icons/logo/LargeLogo";
import MediumLogo from "@/app/components/svg-icons/logo/MediumLogo";
import { contactInfo, infoLinks, menuLinks } from "@/app/lib/consts/common";
import { Link } from "@/i18n/routing";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.largeLogoSection}>
          <LargeLogo width={341} />
          <div className={styles.developedBy}>Developed by @NiceGuy</div>
        </div>
        <div className={styles.menuSection}>
          <div className={styles.sectionTitle}>Meniu</div>
          <ul className={`${styles.list} ${styles.menuList}`}>
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.sectionTitle}>Informații</div>
          <ul className={`${styles.list} ${styles.infoList}`}>
            {infoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.sectionTitle}>Contacte</div>
          <ul className={`${styles.list} ${styles.contactList}`}>
            {contactInfo.map((contact) => (
              <li key={contact.label}>
                <Link href={contact.href}>{contact.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mediumLogoSection}>
          <MediumLogo />
          <div className={styles.developedBy}>Developed by @NiceGuy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
