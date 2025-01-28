import type { CSSProperties } from "react";
import React from "react";
import Image from "next/image";
import styles from "@/app/styles/globals/aboutSection.module.scss";

function AboutImage({
  src,
  styleProps,
}: {
  src: string;
  styleProps?: CSSProperties | undefined;
}) {
  return (
    <div className={`${styles.card} ${styles.imageBox}`}>
      <Image
        sizes="100vw"
        alt="Office"
        width={48}
        height={48}
        src={src}
        className={styles.image}
        style={styleProps}
      />
    </div>
  );
}

export default AboutImage;
