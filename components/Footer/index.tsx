import Link from 'next/link';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { Contacts, FooterBannerNavs, FooterNavs, Socials } from './constants';
import { Logo } from '../Icons/Logo';
import FooterIconFrame from '../Frames/FooterIconFrame';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className={styles.footer}>

     <div className={styles.footer__inner}>
        <div className={styles.footer__inner__brand}>
            <div className={styles.footer__inner__brand__name}>
                <Logo />
                <h1>Canvas <span>Lancer</span></h1>
            </div>
            <div className={styles.footer__inner__brand__desc}>
                <p>Lorem ipsum dolor sit amet consectetur. Scelerisque vitae et vitae suspendisse vulputate vestibulum tortor nisl cursus. Egestas nulla in </p>
            </div>
            <div className={styles.footer__inner__brand__socials}>
                {Socials.map((el, _i) => <FooterIconFrame icon={el.icon()}/>)}
            </div>
        </div>
        {FooterNavs.map((el, _i,) => (
        <div key={_i} className={styles.footer__inner__navlist}>
             <h2>{el.title}</h2>
             <ul>
                {el.navs.map((nav, _i) => <li key={_i}><Link href={nav.href}/>{nav.text}</li>)}
             </ul>
         </div>
        ))}
        <div className={styles.footer__inner__contact}>
            <h2>Contact Information</h2>
            <ul>
            {Contacts.map((el, _i) => <li><>{el.icon}</>{el.value}</li>)}
            </ul>
        </div>
     </div>
     <div className={styles.footer__banner}>
        <div className={styles.footer__banner__inner}>
            <p>Copyright ⓒ Canvas Lancer, 2023. All rights reserved.</p>
            <div className={styles.footer__banner__inner__links}>
                {FooterBannerNavs.map((el, _i) => <Link href={el.href} key={_i}>{el.text}</Link>)}
            </div>
        </div>
     </div>
    </footer>
  )
}

export default Footer;