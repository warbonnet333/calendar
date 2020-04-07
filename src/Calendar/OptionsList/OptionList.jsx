import React, { Component } from 'react'
import styles from "./OptionList.module.css"

export default class OptionList extends Component {



  render() {
    const { onSelectClick, onActiveClick } = this.props
    return (
      <ul onClick={onSelectClick} className={styles.list}>
        <li className={onActiveClick(styles.list__item, styles.active, "today")} data-name="today">Сьогодні</li>
        <li className={onActiveClick(styles.list__item, styles.active, "yesterday")} data-name="yesterday">Вчора</li>
        <li className={onActiveClick(styles.list__item, styles.active, "lastWeek")} data-name="lastWeek">Останні 7 днів</li>
        <li className={onActiveClick(styles.list__item, styles.active, "lastThirtyDays")} data-name="lastThirtyDays">Останні 30 днів</li>
        <li className={onActiveClick(styles.list__item, styles.active, "thisMonth")} data-name="thisMonth">Цей місяць</li>
        <li className={onActiveClick(styles.list__item, styles.active, "lastMonth")} data-name="lastMonth">Минулий місяць</li>
      </ul>
    )
  }

}