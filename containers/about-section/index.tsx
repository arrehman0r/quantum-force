import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import aboutBigger from "@/_assets/about_bigger.png"
import aboutSmall from "@/_assets/about_smal.png"
interface AboutSectionProps {
  
}

const AboutSection: FC<AboutSectionProps> = ({  }) => {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.aboutSection__inner}>

     <div className={styles.aboutSection__inner__img}>
        <div>
       <Image src={aboutBigger} fill style={{objectFit:'cover'}} alt='Section Image'/>
        </div>
        <div>
       <Image src={aboutSmall} fill style={{objectFit:'cover'}} alt='Section Image'/>
        </div>
     </div>
     <div className={styles.aboutSection__inner__content}>

     </div>
        </div>
    </section>
  )
}

export default AboutSection;