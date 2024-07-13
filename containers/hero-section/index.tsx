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
            <h4>Welcome To <span> Quantum Force</span></h4>
            <h1>Redefining  Innovations</h1>
            <p>Providing AI-powered solutions and services to the world’s leading businesses to redefine their objectives with automation and innovation.</p>
        </div>
        <div className={styles.heroSection__inner__buttons}>
          <Link href={'#contact'}>
            <PrimaryButton text='Hire Us'/>
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