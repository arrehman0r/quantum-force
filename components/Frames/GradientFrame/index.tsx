import Image from 'next/image'
import styles from './style.module.scss'
import React, { FC } from 'react'
import project from '@/_assets/projects/project1.png'
interface GradientFrameProps {
  img:any
}

const GradientFrame: FC<GradientFrameProps> = ({ img }) => {
  return (
    <div className={styles.gradientFrame}>
     <Image src={img} fill style={{objectFit:'cover'}} alt='Image'/>
     <div className={styles.gradientFrame__frame} />
    </div>
  )
}

export default GradientFrame;