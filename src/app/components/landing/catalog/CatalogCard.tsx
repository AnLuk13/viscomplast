'use client';

import styles from '@/app/styles/landing/catalogSection.module.scss';
import LinkArrowIcon from '@/app/components/svg-icons/LinkArrowIcon';
import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import dynamic from 'next/dynamic';

const OptimizedImage = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="imageLoading" />,
});

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
      <OptimizedImage
        priority
        src={imageUrl}
        alt="Card image"
        fill
        sizes="(min-width: 1350px) 33.3%, (max-width: 1249px) 100vw, 50vw, 33vw"
        className={`${styles.cardImage} ${isLoading ? 'imageLoading' : ''}`}
        onLoad={() => setIsLoading(false)}
      />
      <div className="fadeOverlay" />
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.listItemContainer}>
        {items.map(item => (
          <Link href={item.href} key={item.name} className={styles.listItemBox}>
            <div className={styles.listItem}>{item.name}</div>
            <div className={styles.actionButton}>
              <LinkArrowIcon />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatalogCard;
