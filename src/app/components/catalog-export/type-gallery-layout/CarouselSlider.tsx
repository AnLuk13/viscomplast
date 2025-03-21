"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import LeftArrow from "@/app/components/svg-icons/slider/LeftArrow";
import RightArrow from "@/app/components/svg-icons/slider/RightArrow";
import styles from "@/app/styles/catalog-export/typeGallerySection.module.scss";

type GalleryProps =
  | {
      src: string;
      id?: number;
      alt?: string;
    }
  | string;

function CarouselSlider({ gallery }: { gallery: GalleryProps[] }) {
  const [isLoading, setIsLoading] = useState(true);
  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        className={styles.nextButton}
        onClick={onClickHandler}
        aria-label={label}
      >
        <RightArrow />
      </button>
    );

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        className={styles.prevButton}
        onClick={onClickHandler}
        aria-label={label}
      >
        <LeftArrow />
      </button>
    );

  return (
    <Carousel
      emulateTouch
      animationHandler="slide"
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      stopOnHover
      swipeScrollTolerance={40}
      className={styles.typeGalleryCardGallery}
      renderArrowNext={renderArrowNext}
      renderArrowPrev={renderArrowPrev}
    >
      {gallery.map((image) => (
        <div
          key={typeof image === "string" ? image : image.id}
          className={styles.typeGalleryCardGalleryImageBox}
        >
          {isLoading && <div className="imageBlur" />}
          <Image
            src={typeof image === "string" ? image : image.src}
            alt={`Gallery image ${typeof image === "string" ? image.trim().slice(0, 10) : image.alt}`}
            fill
            sizes="100%"
            priority
            quality={60}
            className={`${styles.typeGalleryCardGalleryImage} ${isLoading ? "imageLoading" : ""}`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselSlider;
