"use client";

import React from "react";
import styles from "@/app/styles/footer/footer.module.scss";
import LargeLogo from "@/app/components/svg-icons/logo/LargeLogo";
import MediumLogo from "@/app/components/svg-icons/logo/MediumLogo";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.largeLogoSection}>
          <LargeLogo width={341} />
          <div className={styles.developedBy}>{t("developedBy")}</div>
        </div>
        <div className={styles.menuSection}>
          <div className={styles.sectionTitle}>{t("menu.title")}</div>
          <ul className={`${styles.list} ${styles.menuList}`}>
            {t.raw("menu.links").map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.sectionTitle}>{t("info.title")}</div>
          <ul className={`${styles.list} ${styles.infoList}`}>
            {t.raw("info.links").map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.sectionTitle}>{t("contact.title")}</div>
          <ul className={`${styles.list} ${styles.contactList}`}>
            {t.raw("contact.details").map((contact) => (
              <li key={contact.label}>
                <Link href={contact.href}>{contact.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mediumLogoSection}>
          <MediumLogo />
          <div className={styles.developedBy}>{t("developedBy")}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
