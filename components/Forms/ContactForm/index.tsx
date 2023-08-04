"use client"
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryInput from '../Inputs/PrimaryInput';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface ContactFormProps {
  
}

const ContactForm: FC<ContactFormProps> = ({  }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.contactForm}>
        <div className={styles.contactForm__inputs}>
        <PrimaryInput placeholder='Your Name'/>
        <PrimaryInput placeholder='Your Email'/>
        <PrimaryInput textarea placeholder='Your Message'/>
        </div>
        <div className={styles.contactForm__submit}>
            <PrimaryButton text='Submit Message'/>
        </div>
    </form>
  )
}

export default ContactForm;