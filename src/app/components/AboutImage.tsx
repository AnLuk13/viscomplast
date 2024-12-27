import React from "react";
import Image from "next/image";
import styles from "@/app/styles/aboutSection.module.scss";

function AboutImage({ src }: { src: string }) {
  return (
    <div className={`${styles.card} ${styles.imageBox}`}>
      <Image
        sizes="100vw"
        alt="Office"
        width={48}
        height={48}
        src={src}
        className={styles.image}
      />
    </div>
  );
}

export default AboutImage;
