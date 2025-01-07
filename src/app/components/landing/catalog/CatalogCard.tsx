import styles from "@/app/styles/landing/catalogSection.module.scss";
import LinkArrowIcon from "@/app/components/svg-icons/LinkArrowIcon";
import Image from "next/image";
import React from "react";

function CatalogCard({
  title,
  items,
  imageUrl,
}: {
  title: string;
  items: string[];
  imageUrl: { src: string };
}) {
  return (
    <div className={styles.card}>
      <Image
        priority
        src={imageUrl.src}
        alt="Card section"
        fill
        sizes="(min-width: 1350px) 33.3%, (max-width: 1249px) 100vw, 50vw, 33vw"
        quality={100}
        className={styles.cardImage}
      />
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.listItemContainer}>
        {items.map((item) => (
          <div key={item} className={styles.listItemBox}>
            <div className={styles.listItem}>{item}</div>
            <button type="button" className={styles.actionButton}>
              <LinkArrowIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogCard;
