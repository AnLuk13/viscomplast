import React from "react";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import styles from "./offerButton.module.scss";

function OfferButton({ text }: string) {
  return (
    <button type="button" className={styles.catalogHeroButton}>
      {text} <ArrowIcon />
    </button>
  );
}

export default OfferButton;
