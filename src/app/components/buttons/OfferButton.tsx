import React from "react";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import { useTranslations } from "next-intl";
import styles from "./offerButton.module.scss";

function OfferButton() {
  const t = useTranslations();
  return (
    <button type="button" className={styles.catalogHeroButton}>
      {t("offerBtn")} <ArrowIcon />
    </button>
  );
}

export default OfferButton;
