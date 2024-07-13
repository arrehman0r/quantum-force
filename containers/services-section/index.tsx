import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ServiceCard from '@/components/Cards/ServiceCard';
import { Services } from './constants';
import Link from 'next/link';

interface ServicesSectionProps {
  
}

const ServicesSection: FC<ServicesSectionProps> = ({  }) => {
  return (
    <section id='services' className={styles.servicesSection}>
     <div className={styles.servicesSection__inner}>
        <div className={styles.servicesSection__inner__content}>
            <div className={styles.servicesSection__inner__title}>
                <SectionTitle theme='light' text='What We Are Offering' highlight='Offering'/>
            </div>
            <div className={styles.servicesSection__inner__content__info}>
              <div className={styles.servicesSection__inner__content__info__title}>
              <h1>
                <span>Services</span> We Can Offer You!
              </h1>
              </div>
              <div className={styles.servicesSection__inner__content__info__desc}>
                <p>
                Tailored technology, measurable results
                Our custom-built solutions are designed to meet your unique business needs. We leverage cutting-edge tech to deliver scalable, high-performance digital assets that drive real-world impact for your brand.          </p>
              </div>
              <div className={styles.servicesSection__inner__content__info__button}>
                <Link href={'#contact'}>
                  <PrimaryButton text='Hire Us'/>
                </Link>
              </div>
            </div>
        </div>
        <div className={styles.servicesSection__inner__services}>
          <div className={styles.servicesSection__inner__services__items}>
          {Services.map((el, _i) => <ServiceCard key={_i} title={el.title} img={el.img()} desc={el.desc} id={el.id} />)}
          </div>
        </div>
     </div>
    </section>
  )
}

export default ServicesSection;