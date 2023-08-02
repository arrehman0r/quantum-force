"use client"
import styles from './style.module.scss'
import React, { FC } from 'react'

interface PrimaryButtonProps {
  text:string
  style?:'white'
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text,style }) => {
  return (
    <button style={style?{color:'black',background:'white'}:{}} className={styles.primaryButton}>{text}</button>
  )
}

export default PrimaryButton;