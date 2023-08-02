import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface ServicesSectionProps {
  
}

const ServicesSection: FC<ServicesSectionProps> = ({  }) => {
  return (
    <section className={styles.servicesSection}>
     <div className={styles.servicesSection__inner}>
        <div className={styles.servicesSection__inner__content}>
            <div className={styles.servicesSection__inner__title}>
                <SectionTitle text='What We Are Offering' highlight='Offering'/>
            </div>
        </div>
        <div className={styles.servicesSection__inner__img}>

        </div>
     </div>
    </section>
  )
}

export default ServicesSection;