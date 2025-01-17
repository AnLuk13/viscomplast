"use client";

import React from "react";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import { useTranslations } from "next-intl";
import styles from "./offerButton.module.scss";

function OfferButton() {
  const t = useTranslations();
  return (
    <a href="tel:+37360466177" className={styles.offerBtn}>
      {t("offerBtn")} <ArrowIcon />
    </a>
  );
}

export default OfferButton;
