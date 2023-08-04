import styles from './style.module.scss'
import React, { FC } from 'react'

interface PrimaryInputProps {
  placeholder:string
  textarea?:boolean
}

const PrimaryInput: FC<PrimaryInputProps> = ({ placeholder, textarea }) => {
    if(textarea){
        return(
            <textarea placeholder={placeholder} className={styles.primaryInput + ' ' + styles.textArea}/>
        )
    }
  return (
    <input placeholder={placeholder} className={styles.primaryInput}/>
  )
}

export default PrimaryInput;