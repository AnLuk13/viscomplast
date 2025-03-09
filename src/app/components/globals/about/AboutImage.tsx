"use client";

import type { CSSProperties } from "react";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/globals/aboutSection.module.scss";

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
      <Image
        sizes="100vw"
        alt="About image"
        width={100}
        height={100}
        src={src}
        quality={100}
        className={`${styles.image} ${isLoading ? "imageLoading" : ""}`}
        style={styleProps}
        onLoad={() => setIsLoading(false)}
        // loading="lazy" // better perfomance
      />
      <div className="fadeOverlay" />
    </div>
  );
}

export default AboutImage;
