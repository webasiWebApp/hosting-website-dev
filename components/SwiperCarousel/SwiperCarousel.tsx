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
    key: "slide1",
    background:
      "https://images.unsplash.com/photo-1739372425274-d41281e72c5d?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3",
    spanText: "slide1",
    title: "합의는 연구소의, 참여하라",
    description: "한 뜨겁기 및 오르고 악질이 모자로 움직인 시대만 맞는다.",
  },
  {
    key: "slide2",
    background:
      "https://images.unsplash.com/photo-1734671223970-16adb03bedb7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    spanText: "slide2",
    title: "온도는 집중으로 되라",
    description: "정부미를 대통령제는 마련하게 칭호도 최고는 것 이 시행하다.",
  },
  {
    key: "slide3",
    background:
      "https://images.unsplash.com/photo-1735746693937-023fa491a32e?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3",
    spanText: "slide3",
    title: "진공이 적극적이 공부하다",
    description: "연출을 기업을 노동계는 구입에 안심하다.",
  },
  {
    key: "slide4",
    background:
      "https://images.unsplash.com/photo-1740619061019-38581c1c293a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    spanText: "slide4",
    title: "지난밤의 위하는 차지하다",
    description: "권력으로 보낸다 오판으로 활용은 등 언론 역사가 나온다 그러나.",
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
      swiperContainerRef.current.classList.add(styles.outline);
      showNavButtons(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (swiperContainerRef.current) {
      swiperContainerRef.current.classList.remove(styles.outline);
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