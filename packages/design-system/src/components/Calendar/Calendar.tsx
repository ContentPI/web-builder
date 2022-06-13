import React, { FC, useEffect, useState } from 'react'

import Icon from '../Icon'
import { CSS } from './Calendar.styled'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const date = new Date()

const Calendar: FC = () => {
  date.setDate(1)

  const [firstDayIndex, setFirstDayIndex] = useState(date.getDay())
  const [currentMonth, setCurrentMonth] = useState(date.getMonth())
  const [days, setDays] = useState<any>([])
  const [lastDay, setLastDay] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  )
  const [previousLastDay, setPreviousLastDay] = useState(
    new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  )
  const [lastDayIndex, setLastDayIndex] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
  )
  const [nextDays, setNextDays] = useState(7 - lastDayIndex)

  const renderDays = () => {
    const daysArr = []

    for (let h = firstDayIndex; h > 0; h -= 1) {
      daysArr.push(
        <li className="previousMonth">
          <span className="dayNumber">{previousLastDay - h + 1}</span>
          <div className="event">Carlos Santana Roldan</div>
        </li>
      )
    }

    for (let i = 1; i <= lastDay; i += 1) {
      const isToday = i === new Date().getDate() && date.getMonth() === new Date().getMonth()

      daysArr.push(
        <li className={isToday ? 'today' : ''}>
          <span className="dayNumber">
            {isToday ? 'Today is' : ''} {i}
          </span>
          <div className="event">Carlos Santana Roldan</div>
        </li>
      )
    }

    for (let j = 1; j < nextDays; j += 1) {
      daysArr.push(
        <li className="nextMonth">
          <span className="dayNumber">{j}</span>
          <div className="event">Carlos Santana Roldan</div>
        </li>
      )
    }

    setDays(daysArr)
  }

  const handleDayClick = (e: any) => {
    console.log('CLICK===', e.currentTarget)
  }

  const handlePreviousMonth = () => {
    const prevMonth = date.getMonth() - 1

    date.setMonth(prevMonth === -1 ? 11 : prevMonth)

    setCurrentMonth(prevMonth === -1 ? 11 : prevMonth)
    setFirstDayIndex(date.getDay())
    setLastDay(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())
    setPreviousLastDay(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
    setLastDayIndex(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay())
    setNextDays(7 - lastDayIndex)

    date.setDate(1)

    setTimeout(() => {
      renderDays()
    }, 0)
  }

  const handleNextMonth = () => {
    const nextMonth = date.getMonth() + 1
    console.log('ENTRA===', nextMonth)
    date.setMonth(nextMonth === 12 ? 0 : nextMonth)

    setCurrentMonth(nextMonth === 12 ? 0 : nextMonth)
    setFirstDayIndex(date.getDay())
    setLastDay(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())
    setPreviousLastDay(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
    setLastDayIndex(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay())
    setNextDays(7 - lastDayIndex)
    date.setDate(1)
    setTimeout(() => {
      renderDays()
    }, 0)
  }

  useEffect(() => {
    renderDays()
  }, [])

  return (
    <CSS.Calendar>
      <header>
        <Icon type="fas fa-chevron-left" onClick={handlePreviousMonth} />
        <div className="currentDate">
          <h2>{months[currentMonth]}</h2>
          <h3>{new Date().toDateString()}</h3>
        </div>
        <Icon type="fas fa-chevron-right" onClick={handleNextMonth} />
      </header>

      <ul className="weekdays">
        <li>
          <abbr title="S">Sunday</abbr>
        </li>
        <li>
          <abbr title="M">Monday</abbr>
        </li>
        <li>
          <abbr title="T">Tuesday</abbr>
        </li>
        <li>
          <abbr title="W">Wednesday</abbr>
        </li>
        <li>
          <abbr title="T">Thursday</abbr>
        </li>
        <li>
          <abbr title="F">Friday</abbr>
        </li>
        <li>
          <abbr title="S">Saturday</abbr>
        </li>
      </ul>

      <ol className="dayGrid">{days}</ol>
    </CSS.Calendar>
  )
}

export default Calendar
