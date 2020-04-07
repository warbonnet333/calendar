import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import styles from "./Calendar.module.css";
import "./DataPicker.css";
// import options from '../servise/options'
// import Select from 'react-select';
import OptionList from './OptionsList/OptionList'
import { WEEKDAYS_LONG, WEEKDAYS_SHORT, MONTHS } from '../servise/localization/ua'

const moment = require('moment');

export default class Calendar extends Component {
  state = {
    from: undefined,
    to: undefined,
  };


  handleDayClick = day => {
    const { from, to } = DateUtils.addDayToRange(day, this.state);
    this.setState({ from: from, to: to });
  };


  selectOption = (event) => {
    const name = event.target.dataset.name

    switch (name) {
      case "today":
        const today = moment().toDate()
        this.setState({ from: today, to: today })
        break

      case "yesterday":
        let neededDay = moment().date() - 1
        const newDate = moment().date(neededDay).toDate()
        this.setState({ from: newDate, to: newDate })
        break;

      case "lastWeek":
        const neededWeekDay = moment().date() - 6
        const firstDayWeek = moment().date(neededWeekDay).toDate()
        const nowDay = moment().toDate()
        this.setState({ from: firstDayWeek, to: nowDay })
        break

      case "lastThirtyDays":
        const neededThityDay = moment().date() - 29
        const firstThirtyDay = moment().date(neededThityDay).toDate()
        this.setState({ from: firstThirtyDay, to: moment().toDate() })
        break

      case "thisMonth":
        const neededMonthDay = moment().date(1).toDate()
        this.setState({ from: neededMonthDay, to: moment().toDate() })
        break

      case "lastMonth":
        const lastMonth = moment().month() - 1
        const lastMonthDayStart = moment().month(lastMonth).date(1).toDate()
        const lastMonthDayEnd = moment().date(0).toDate()
        this.setState({ from: lastMonthDayStart, to: lastMonthDayEnd })
        break

      default: break
    }
  }


  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className={styles.container}>
        <div className={styles.selectContainer}>
          <OptionList onSelectClick={this.selectOption} />
        </div>
        <div className={styles.piackerContainer}>
          <DayPicker
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={1}
          />
        </div>
      </div>
    );
  }
}