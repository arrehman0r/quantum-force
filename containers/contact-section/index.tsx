import SectionTitle from '@/components/Titles/SectionTitle';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import ContactForm from '@/components/Forms/ContactForm';
import contactImg from "@/_assets/contact_img.png"
import Image from 'next/image';
interface ContactSectionProps {
  
}

const ContactSection: FC<ContactSectionProps> = ({  }) => {
  return (
    <section id='contact' className={styles.contactSection}>
        <div className={styles.contactSection__inner}>
            <div className={styles.contactSection__inner__content}>
                <div className={styles.contactSection__inner__content__title}>
                    <SectionTitle theme='dark' text='Contact Us' highlight='Contact Us'/>
                </div>
                <div className={styles.contactSection__inner__content__info}>
                    <div className={styles.contactSection__inner__content__info__title}>
                        <h1><span>Contact</span> Us & We Can Work Together</h1>
                    </div>
                    <div className={styles.contactSection__inner__content__info__desc}>
                        <p>You can schedule your free 30 minutes call with one of our experts today.</p>
                    </div>
                    <div className={styles.contactSection__inner__content__info__form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={styles.contactSection__inner__img}>
                <Image src={contactImg} alt='Section Image'/>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;