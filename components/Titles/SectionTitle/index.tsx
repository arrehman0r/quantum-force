import { renderHighlightedText } from '@/service/Formatter'
import styles from './style.module.scss'
import React, { FC } from 'react'

interface SectionTitleProps {
  text:string
  highlight:string
}

const SectionTitle: FC<SectionTitleProps> = ({ text, highlight }) => {
    
  return (
    <div className={styles.sectionTitle}>
        <hr/>
        <div className={styles.sectionTitle__text}>
            {renderHighlightedText(text,highlight)}
        </div>
    </div>
  )
}

export default SectionTitle;