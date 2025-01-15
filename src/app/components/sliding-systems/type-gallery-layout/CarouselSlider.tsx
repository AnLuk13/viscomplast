"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import LeftArrow from "@/app/components/svg-icons/slider/LeftArrow";
import RightArrow from "@/app/components/svg-icons/slider/RightArrow";
import styles from "@/app/styles/sliding-systems/slidingSystemsSection.module.scss";

const sliderImages = [
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 1",
  },
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 2",
  },
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 3",
  },
];

function CarouselSlider() {
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
      autoPlay
      stopOnHover
      interval={5000}
      swipeScrollTolerance={40}
      className={styles.typeGalleryCardGallery}
      renderArrowNext={renderArrowNext}
      renderArrowPrev={renderArrowPrev}
    >
      {sliderImages.map((image, index) => (
        <div
          key={`slider-image-${image}`}
          className={styles.typeGalleryCardGalleryImageBox}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100%"
            priority
            quality={60}
            className={styles.typeGalleryCardGalleryImage}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselSlider;
