'use client';

import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import styles from '@/app/styles/globals/aboutSection.module.scss';
import dynamic from 'next/dynamic';

const OptimizedImage = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="imageLoading" />,
});

function AboutImage({
  src,
  styleProps,
}: {
  src: string;
  styleProps?: CSSProperties | undefined;
}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={`${styles.card} ${styles.imageBox}`}>
      {isLoading && <div className="imageBlur" />}
      <OptimizedImage
        sizes="100vw"
        alt="About image"
        width={100}
        height={100}
        src={src}
        className={`${styles.image} ${isLoading ? 'imageLoading' : ''}`}
        style={styleProps}
        onLoad={() => setIsLoading(false)}
        // loading="lazy" // better perfomance
      />
      <div className="fadeOverlay" />
    </div>
  );
}

export default AboutImage;
