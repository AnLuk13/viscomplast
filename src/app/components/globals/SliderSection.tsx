"use client";

import React, { useRef, useState } from "react";
import styles from "@/app/styles/globals/sliderSection.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import RightArrow from "@/app/components/svg-icons/slider/RightArrow";
import LeftArrow from "@/app/components/svg-icons/slider/LeftArrow";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

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
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 4",
  },
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 5",
  },
  {
    src: "/assets/images/office.png",
    alt: "Portfolio 6",
  },
];

function SliderSection({ content }) {
  const carouselRef = useRef<Carousel>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem - 1);
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1);
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderSectionTitle}>
        <BlinkIcon color="#18437E" />
        <div>{content("sliderSection.title")}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <Carousel
        ref={carouselRef}
        emulateTouch
        animationHandler="slide"
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay
        stopOnHover
        interval={5000}
        swipeScrollTolerance={60}
        className={styles.carousel}
        centerMode
        centerSlidePercentage={33.3}
        onChange={handleSlideChange}
        onClickItem={handleSlideChange}
        selectedItem={currentSlide}
      >
        {sliderImages.map((image, index) => (
          <div
            key={uuidv4()}
            className={`${styles.slide} ${
              currentSlide === index ? styles.centerSlide : styles.sideSlide
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="33,3%"
              priority
              quality={60}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Carousel>
      <div className={styles.carouselBtns}>
        <button type="button" className={styles.navButton} onClick={handlePrev}>
          <LeftArrow />
        </button>
        {/* <button type="button" className={styles.viewAllButton}> */}
        {/*  {content("sliderSection.buttons.viewAll")} */}
        {/* </button> */}
        <button type="button" className={styles.navButton} onClick={handleNext}>
          <RightArrow />
        </button>
      </div>
    </section>
  );
}

export default SliderSection;
