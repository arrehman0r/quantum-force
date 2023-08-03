"use client"
import styles from './style.module.scss'
import React, { FC, useState } from 'react'
import { useFilterStore } from '@/store/filterStore'

interface FilterButtonProps {
  text:string
}

const FilterButton: FC<FilterButtonProps> = ({ text }) => {
    const { filter, change } = useFilterStore()
    const style = {
        true:styles.active,
        false:''
    }[String(filter.toLocaleLowerCase()===text.toLocaleLowerCase())]
  return (
    <div className={styles.filterButton + ' ' + style} onClick={()  => change(text)}>
     {text}
    </div>
  )
}

export default FilterButton;