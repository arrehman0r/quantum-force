import styles from './style.module.scss'
import React, { FC } from 'react'

interface ServiceCardProps {
  id:number,
  title:string,
  img:JSX.Element,
  desc:string
}

const ServiceCard: FC<ServiceCardProps> = ({ title,img,desc }) => {
  return (
    <div className={styles.serviceCard}>
     <div className={styles.serviceCard__icon}>
        {img}
     </div>
     <h2>{title}</h2>
     <p>{desc}</p>
    </div>
  )
}

export default ServiceCard;