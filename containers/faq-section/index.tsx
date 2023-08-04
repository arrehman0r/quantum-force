import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import Faq from '@/components/Faq';
import { Questions } from './constants';

interface FaqSectionProps {
  
}

const FaqSection: FC<FaqSectionProps> = ({  }) => {
  return (
    <section id='faq' className={styles.faqSection}>
        <div className={styles.faqSection__inner}>
            <div className={styles.faqSection__inner__title}>
                <SectionTitle centered text='FAQs' theme='dark' highlight=' '/>
            </div>
            <div className={styles.faqSection__inner__content}>
                <div className={styles.faqSection__inner__content__title}>
                    <h1>Frequently Asked <span>Questions</span></h1>
                </div>
                <div className={styles.faqSection__inner__content__questions}>
                    {Questions.map((el, _i) => <Faq key={_i} title={el.question} answer={el.answer}/>)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FaqSection;