import styles from "@/app/styles/landing/catalogSection.module.scss";
import LinkArrowIcon from "@/app/components/svg-icons/LinkArrowIcon";
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";

function CatalogCard({
  title,
  items,
  imageUrl,
}: {
  title: string;
  items: { name: string; href: string }[];
  imageUrl: { src: string };
}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.card}>
      {isLoading && <div className="imageBlur" />}

      <Image
        priority
        src={imageUrl}
        alt="Card image"
        fill
        sizes="(min-width: 1350px) 33.3%, (max-width: 1249px) 100vw, 50vw, 33vw"
        quality={100}
        className={`${styles.cardImage} ${isLoading ? "loading" : ""}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="fadeOverlay" />
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.listItemContainer}>
        {items.map((item) => (
          <div key={item.name} className={styles.listItemBox}>
            <div className={styles.listItem}>{item.name}</div>
            <Link href={item.href} className={styles.actionButton}>
              <LinkArrowIcon />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogCard;
