import { renderHighlightedText } from '@/service/Formatter'
import styles from './style.module.scss'
import React, { FC } from 'react'

interface SectionTitleProps {
  text:string
  highlight?:string,
  theme:'light'|'dark',
  centered?:boolean
}

const SectionTitle: FC<SectionTitleProps> = ({ text, highlight, theme,centered }) => {
    const color = {
      light:'white',
      dark:'#696969'
    }[theme]
    
  return (
    <div className={styles.sectionTitle}>
        <hr/>
        <div className={styles.sectionTitle__text}>
            {highlight?renderHighlightedText(text,highlight,color):<h1>{text}</h1>}
        </div>
        {centered&&<hr />}
    </div>
  )
}

export default SectionTitle;