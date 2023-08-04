import styles from './style.module.scss'
import React, { FC } from 'react'

interface FooterIconFrameProps {
  icon:JSX.Element
}

const FooterIconFrame: FC<FooterIconFrameProps> = ({ icon }) => {
  return (
    <div className={styles.footerIconFrame}>
        {icon}
    </div>
  )
}

export default FooterIconFrame;