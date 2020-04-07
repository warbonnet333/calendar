import React from 'react'
import styles from "./OptionList.module.css"

const OptionList = ({ onSelectClick, onActiveClick }) =>
  <ul onClick={onSelectClick} className={styles.list}>
    <li onClick={onActiveClick} className={styles.list__item} data-name="today">Сьогодні</li>
    <li onClick={onActiveClick} className={styles.list__item} data-name="yesterday">Вчора</li>
    <li onClick={onActiveClick} className={styles.list__item} data-name="lastWeek">Останні 7 днів</li>
    <li onClick={onActiveClick} className={styles.list__item} data-name="lastThirtyDays">Останні 30 днів</li>
    <li onClick={onActiveClick} className={styles.list__item} data-name="thisMonth">Цей місяць</li>
    <li onClick={onActiveClick} className={styles.list__item} data-name="lastMonth">Минулий місяць</li>
  </ul>


export default OptionList