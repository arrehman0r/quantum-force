import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import herobg from "@/_assets/herobg.png"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Link from 'next/link';
interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({  }) => {
  return (
    <section id='hero' className={styles.heroSection}>
        <Image src={herobg} alt='Hero Bg' fill style={{objectFit:'cover'}}/>
        <div className={styles.heroSection__inner}>
        <div className={styles.heroSection__inner__welcomeText}>
            <h4>Welcome To <span> StackNex Lab</span></h4>
            <h1>Center of Digital Solutions</h1>
            <p>StackNex Lab is a dynamic and innovative software agency that has been at the forefront of digital solutions. With a team of experienced professionals, we are dedicated to delivering cutting-edge solutions that drive business growth and success. </p>
        </div>
        <div className={styles.heroSection__inner__buttons}>
          <Link href={'https://wa.link/vmw0hs'}>
            <PrimaryButton text='Contact Us'/>
          </Link>
          <Link href={'#projects'}>
            <PrimaryButton text='View Portfolio' style='white'/>
          </Link>
        </div>
        </div>
    </section>
  )
}

export default HeroSection;