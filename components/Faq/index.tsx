"use client";
import { DownArrow } from '../Icons/DownArrow';
import styles from './style.module.scss'
import React, { FC, useState } from 'react'

interface FaqProps {
  title:string,
  answer:string
}

const Faq: FC<FaqProps> = ({ title, answer }) => {

    const [isActive, setIsActive] = useState(false)
    
  return (
    <div className={styles.faq}>
        <div className={styles.faq__title} onClick={() => setIsActive(prev=>!prev)} style={isActive?{background:'#202020',color:'white'}:{background:'#F1F1F1',color:'#333335'}}>
            <h4>{title}</h4>
            <DownArrow deg={isActive?0:180} color={!isActive?'#202020':'white'} />
        </div>
        <div className={styles.faq__answer} style={!isActive?{display:'none'}:{display:'flex'}}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default Faq;