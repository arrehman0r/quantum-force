import Link from 'next/link';
import { Logo } from '../Icons/Logo';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton';
import { HeaderNavs } from './constants';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__inner__logo}>
                <Logo />
                <h1>StackNex <span>Lab</span></h1>
            </div>
            <nav className={styles.header__inner__nav}>
                {HeaderNavs.map((el, _i) => <Link key={_i} href={el.href}>{el.text}</Link>)}
            </nav>
            <div className={styles.header__inner__button}>
                <Link href={'#contact'}>
                    <PrimaryButton text='Contact Us'/>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header;