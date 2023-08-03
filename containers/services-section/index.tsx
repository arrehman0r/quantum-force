import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ServiceCard from '@/components/Cards/ServiceCard';
import { Services } from './constants';

interface ServicesSectionProps {
  
}

const ServicesSection: FC<ServicesSectionProps> = ({  }) => {
  return (
    <section className={styles.servicesSection}>
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
                Lorem ipsum dolor sit amet consectetur. Adipiscing nisl id at arcu enim id gravida pulvinar. Tristique consectetur mi curabitur congue enim dignissim amet justo. Porta morbi nulla aliquet adipiscing. Sed diam mauris erat faucibus eu posuere ultricies quisque amet. Quam pellentesque in tristique 
                </p>
              </div>
              <div className={styles.servicesSection__inner__content__info__button}>
                <PrimaryButton text='Hire Us'/>
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