import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import ServiceCard from '@/components/Cards/ServiceCard';
import TestimonialCard from '@/components/Cards/TestimonialCard';
import TestimonialSlider from './testimonial-slider';
import SlideButton from '@/components/Buttons/SlideButton';
import { Testimonials } from './constants';

interface TestimonialsSectionProps {
  
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({  }) => {
    const slidePerView = 3;
  return (
    <section id='testimonials' className={styles.testimonialsSection}>
        <div className={styles.testimonialsSection__inner}>
            <div className={styles.testimonialsSection__inner__title}>
                <div>
                <SectionTitle text='Customer Feedbacks' highlight='Feedbacks' theme='light'/>
                </div>
                <div className={styles.testimonialsSection__inner__title__slideBullets}>
                    <SectionTitle text='' theme='light'></SectionTitle>
                    {Array.from({length:Testimonials.length / slidePerView}, (el, _i) => <SlideButton id={_i} key={_i} />)}
                </div>
            </div>
            <div className={styles.testimonialsSection__inner__content}>
                <div className={styles.testimonialsSection__inner__content__title}>
                    <h1>What Our <span>Customer</span> Say About Us</h1>
                </div>
                <div className={styles.testimonialsSection__inner__content__testimnoials}>
                    <TestimonialSlider items={Testimonials} slidePerView={slidePerView}/>
                </div>
                <div className={styles.testimonialsSection__inner__title__slideBullets__mobile}>
                    {Array.from({length:Testimonials.length / slidePerView}, (el, _i) => <SlideButton id={_i} key={_i} />)}
                </div>    
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection;