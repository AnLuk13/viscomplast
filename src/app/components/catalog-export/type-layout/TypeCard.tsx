'use client';

import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import styles from '@/app/styles/catalog-export/typesSection.module.scss';
import Image from 'next/image';

type TypeCardProps = {
  src: string;
  name: string;
  description: string;
  hex: string;
  imgStyles: CSSProperties;
};

function TypeCard({ src, name, description, hex, imgStyles }: TypeCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.typeCard}>
      {src ? (
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px 24px 0 0',
          }}
        >
          {isLoading && <div className="imageBlur" />}
          <Image
            priority
            src={src}
            alt="Image type"
            width={100}
            height={100}
            className={`${styles.cardImage} ${isLoading ? 'imageLoading' : ''}`}
            onLoad={() => setIsLoading(false)}
            style={imgStyles}
          />
        </div>
      ) : (
        <div className={styles.cardImage} style={{ background: hex }} />
      )}
      <div className={styles.cardContent}>
        <div className={styles.cardText} style={{ fontWeight: 700 }}>
          {name}
        </div>
        {description && <div className={styles.cardText}>{description}</div>}
      </div>
    </div>
  );
}

export default TypeCard;
