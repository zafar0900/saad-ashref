"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Link from "next/link";

import SLIDERSHAPES from "@/constant/photo-studio/slider-shapes";
import SLIDEDATA from "@/constant/photo-studio/slide-data";

const HeroPhotostudioSlider = () => {
  return (
    <div className="relative">
      <Swiper 
        modules={[FreeMode]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false, // ✅ VERY IMPORTANT  hero-photostudio__slider
        }}
        allowTouchMove={false}
        className="  marquee-slider "
      >
        {/* Slider Shapes */}
        {/* <div className="slider-shape">
          {SLIDERSHAPES.map((shape) => (
            <img key={shape.id} src={shape.imgSrc} alt={shape.alt} />
          ))}
        </div> */}

        {/* Slider Images */}
        {SLIDEDATA.concat(SLIDEDATA).map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link}>  
              <img src={slide.imgSrc} alt={slide.alt} />

            </Link>
          </SwiperSlide> 
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPhotostudioSlider;
