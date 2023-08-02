import Link from 'next/link';
import { Logo } from '../Icons/Logo';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__inner__logo}>
                <Logo />
                <h1>Canvas <span>Lancer</span></h1>
            </div>
            <nav className={styles.header__inner__nav}>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Services</Link>
                <Link href={'/'}>Portfolio</Link>
                <Link href={'/'}>Testimonials</Link>
                <Link href={'/'}>Faqs</Link>
            </nav>
            <div className={styles.header__inner__button}>
                <PrimaryButton text='Contact Us'/>
            </div>
        </div>
    </header>
  )
}

export default Header;