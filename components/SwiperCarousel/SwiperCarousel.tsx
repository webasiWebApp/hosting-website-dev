"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./SwiperCarousel.module.css";

const slidesData = [
  {
    key: "Dedicated Servers",
    background:
      "/heroimg1.png",
    spanText: "Dedicated Servers",
    title: "Unmatched Server Power for Your Business",
    description: "Leverage the raw power of our dedicated servers for your demanding applications, providing unparalleled performance and scalability.",
  },
  {
    key: "Secure Data Hosting",
    background:
      "/heroimg2.png",
    spanText: "Secure Data Hosting",
    title: "High-Performance SSD Hosting",
    description: "Accelerate your website with blazing-fast SSD storage, ensuring rapid data access and unbeatable performance for your online presence.",
  },
  {
    key: "Network Coverage",
    background:
      "/heroimg3.png",
    spanText: "Network Coverage",
    title: "Seamless Global Hosting Network",
    description: "Deploy your website across the globe with our expansive server network, guaranteeing low-latency access for your users, no matter their location.",
  },
  {
    key: "SSD Hosting",
    background:
      "/heroimg4.png",
    spanText: "SSD Hosting",
    title: "Lightning-Fast SSD Hosting Solutions",
    description: "Accelerate your website with blazing-fast SSD storage, ensuring rapid data access and unbeatable performance for your online presence.",
  },
];

export default function SwiperCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTabPressed, setIsTabPressed] = useState(false);
  const swiperRef = useRef<any>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard detection for Tab key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") setIsTabPressed(true);
    };
    const onMouseDown = () => {
      setIsTabPressed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  // Show/hide navigation buttons
  const showNavButtons = (show: boolean) => {
    const nextBtn = document.querySelector(
      `.${styles.swiperButtonNext}`
    ) as HTMLElement;
    const prevBtn = document.querySelector(
      `.${styles.swiperButtonPrev}`
    ) as HTMLElement;
    if (nextBtn && prevBtn) {
      nextBtn.style.opacity = show ? "1" : "0";
      prevBtn.style.opacity = show ? "1" : "0";
    }
  };

  // Mouse enter/leave handlers
  const handleMouseEnter = () => {
    if (swiperContainerRef.current) {
      // swiperContainerRef.current.classList.add(styles.outline);
      showNavButtons(false);
    }
  };
  
  const handleMouseLeave = () => {
    if (swiperContainerRef.current) {
      // swiperContainerRef.current.classList.remove(styles.outline);
      showNavButtons(false);
      setIsTabPressed(false);
    }
  };

  // Focus handlers for keyboard navigation
  const handleFocusIn = () => {
    if (isTabPressed && swiperContainerRef.current) {
      swiperContainerRef.current.classList.add(styles.outline);
      showNavButtons(true);
    }
  };
  
  const handleFocusOut = () => {
    if (swiperContainerRef.current) {
      swiperContainerRef.current.classList.remove(styles.outline);
      showNavButtons(false);
      setIsTabPressed(false);
    }
  };

  // Custom pagination rendering function
  const renderCustomPagination = (swiper: any, current: number, total: number) => {
    return slidesData
      .map(
        (slide, index) =>
          `<div class="${
            styles.customPagination
          } ${index === current - 1 ? styles.active : ""}" data-index="${index}">
          ${slide.spanText}
          <div class="${styles.timebar}"></div>
        </div>`
      )
      .join("");
  };

  // Swiper options
  const swiperOptions: SwiperOptions = {
    effect: "fade",
    loop: true, 
    centeredSlides: true,
    speed: 600,
    slidesPerView: 1,
    allowTouchMove: false,
    // waitForTransition: true,
    autoplay: { 
      delay: 2500, 
      disableOnInteraction: false 
    },
    navigation: {
      nextEl: `.${styles.swiperButtonNext}`,
      prevEl: `.${styles.swiperButtonPrev}`,
    },
    pagination: {
      el: `.${styles.swiperPagination}`,
      clickable: true,
      type: "custom",
      renderCustom: renderCustomPagination,
    },
    modules: [Navigation, Pagination, Autoplay, EffectFade],
  };

  // Handle pagination click
  const handlePaginationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const paginationEl = target.closest(`.${styles.customPagination}`);
    
    if (paginationEl) {
      const index = Number(paginationEl.getAttribute("data-index"));
      if (!isNaN(index) && swiperRef.current) {
        swiperRef.current.slideToLoop(index);
      }
    }
  };

  return (
    <div
      ref={swiperContainerRef}
      className={styles.swiper}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        {...swiperOptions}
      >
        {slidesData.map(({ key, background, spanText, title, description }) => (
          <SwiperSlide
            key={key}
            style={{ backgroundImage: `url(${background})` }}
            className={styles.swiperSlide}
          >
            <span className="visually-hidden">{spanText}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className={styles.swiperButtonNext} />
      <div className={styles.swiperButtonPrev} />

      {/* Pagination container */}
      <div
        className={styles.swiperPagination}
        onClick={handlePaginationClick}
      />
    </div>
  );
}