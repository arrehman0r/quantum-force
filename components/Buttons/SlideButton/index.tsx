"use client"
import { useTestimonialSlideStore } from '@/store/testimonialSlideStore'
import styles from './style.module.scss'
import React, { FC } from 'react'

interface SlideButtonProps {
    id:number
}

const SlideButton: FC<SlideButtonProps> = ({ id }) => {
    const { activeIndex, ref } = useTestimonialSlideStore()
    
  return (
    <div className={activeIndex===id?styles.active:styles.slideButton} onClick={() => ref.current.slideTo(id, 500)} />
  )
}

export default SlideButton;