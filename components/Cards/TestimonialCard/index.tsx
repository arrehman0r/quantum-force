import { RatingIcon } from '@/components/Icons/RatingIcon'
import styles from './style.module.scss'
import React, { FC } from 'react'
import { QuoteIcon } from '@/components/Icons/Quote'

interface TestimonialCardProps {
  rating:number
  name:string
  comment:string
}

const TestimonialCard: FC<TestimonialCardProps> = ({ rating, name, comment }) => {
  return (
    <div className={styles.testimonialCard}>
     <div className={styles.testimonialCard__icon}>
        <QuoteIcon></QuoteIcon>
     </div>
     <h2>{name}</h2>
     <div className={styles.testimonialCard__rating}>
        {Array.from({length:rating}, (el,_i)=> <RatingIcon key={_i} />)}
     </div>
     <p>{comment}</p>
    </div>
  )
}

export default TestimonialCard;