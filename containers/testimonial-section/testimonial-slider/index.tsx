"use client"
import styles from './style.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import React, { FC, useEffect, useRef } from 'react'
import TestimonialCard from "@/components/Cards/TestimonialCard";
import { useTestimonialSlideStore } from '@/store/testimonialSlideStore';

interface TestimonialSliderProps {
  slidePerView:number,
  items: any[]
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ slidePerView, items }) => {
    const { changeRef, changeActiveIndex } = useTestimonialSlideStore()
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        changeRef(swiperRef)
    },[swiperRef])
  return (
    <Swiper className={styles.testimonialSlider}
    slidesPerView={slidePerView}
    onSlideChange={(slide) => changeActiveIndex(slide.activeIndex)}
    onSwiper={(swiper) => {
        swiperRef.current = swiper;
    }}
    centeredSlidesBounds
    >
        {items.map((el,_i) => <SwiperSlide key={_i} className={styles.testimonialSlider__slide}><TestimonialCard rating={el.rating} name={el.name} comment={el.comment} /></SwiperSlide>)}
    </Swiper>
  )
}

export default TestimonialSlider;