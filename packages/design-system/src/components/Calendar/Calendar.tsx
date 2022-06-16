import { cx } from '@web-builder/utils'
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

const getTwoDigitsDay = (day: number) => {
  if (day <= 9) {
    return `0${day}`
  }

  return day
}

const getTwoDigitsMonth = (month: number) => {
  if (month <= 9) {
    return `0${month}`
  }

  return month
}

type Event = {
  startDate: string
  endDate: string
  title: string
  color?: string
}

type Props = {
  events: Event[]
  dateClick?: any
}

const Calendar: FC<Props> = ({ events, dateClick }) => {
  date.setDate(1)

  const [firstDayIndex, setFirstDayIndex] = useState(date.getDay())
  const [currentMonth, setCurrentMonth] = useState<any>(date.getMonth())
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
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

  const handleDayClick = (existingEvent: any) => {
    if (dateClick) {
      return dateClick(existingEvent)
    }

    return dateClick()
  }

  const renderDays = () => {
    const daysArr = []

    for (let h = firstDayIndex; h > 0; h -= 1) {
      const currentDay = previousLastDay - h + 1
      const month = currentMonth - 1
      const currentDate: string = `${
        month === -1 ? currentYear - 1 : currentYear
      }-${getTwoDigitsMonth(month === -1 ? 12 : month)}-${getTwoDigitsDay(currentDay)}`

      const initialDate = new Date(currentDate).getTime()

      const existingEvent = events.find((event: Event) => {
        const start = new Date(event.startDate).getTime()
        const end = new Date(event.endDate).getTime()

        return initialDate >= start && initialDate <= end
      })

      daysArr.push(
        <li className="previousMonth" id={currentDate}>
          <span className="dayNumber">{currentDay}</span>
          {existingEvent ? (
            <div
              className="event"
              style={existingEvent.color ? { background: existingEvent.color } : {}}
            >
              {existingEvent.title}
            </div>
          ) : null}
        </li>
      )
    }

    for (let i = 1; i <= lastDay; i += 1) {
      const isToday =
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()

      const currentDate: string = `${currentYear}-${getTwoDigitsMonth(
        currentMonth + 1
      )}-${getTwoDigitsDay(i)}`
      console.log('CURRENT DATE===', currentDate)
      const initialDate = new Date(currentDate).getTime()

      const existingEvent = events.find((event: Event) => {
        const start = new Date(event.startDate).getTime()
        const end = new Date(event.endDate).getTime()

        return initialDate >= start && initialDate <= end
      })

      daysArr.push(
        <li
          className={isToday ? 'today' : 'day'}
          onClick={() => handleDayClick(existingEvent || currentDate)}
          id={currentDate}
        >
          <span className="dayNumber">{i}</span>
          {existingEvent ? (
            <div
              className="event"
              style={existingEvent.color ? { background: existingEvent.color } : {}}
            >
              {existingEvent.title}
            </div>
          ) : null}
        </li>
      )
    }

    for (let j = 1; j < nextDays; j += 1) {
      const month = currentMonth + 2
      const currentDate: string = `${
        month === 13 ? currentYear + 1 : currentYear
      }-${getTwoDigitsMonth(month === 13 ? 1 : month)}-${getTwoDigitsDay(j)}`

      const initialDate = new Date(currentDate).getTime()

      const existingEvent = events.find((event: Event) => {
        const start = new Date(event.startDate).getTime()
        const end = new Date(event.endDate).getTime()

        return initialDate >= start && initialDate <= end
      })

      daysArr.push(
        <li className="nextMonth" id={currentDate}>
          <span className="dayNumber">{j}</span>
          {existingEvent ? (
            <div
              className="event"
              style={existingEvent.color ? { background: existingEvent.color } : {}}
            >
              {existingEvent.title}
            </div>
          ) : null}
        </li>
      )
    }

    setDays(daysArr)
  }

  const handlePreviousMonth = () => {
    const prevMonth = date.getMonth() - 1
    const isPrevYear = prevMonth === -1
    const prevYear = isPrevYear ? date.getFullYear() - 1 : date.getFullYear()

    date.setMonth(isPrevYear ? 11 : prevMonth)
    date.setFullYear(prevYear)

    setCurrentYear(prevYear)

    setCurrentMonth(prevMonth === -1 ? 11 : prevMonth)
    setFirstDayIndex(date.getDay())
    setLastDay(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())
    setPreviousLastDay(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
    setLastDayIndex(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay())
    setNextDays(7 - lastDayIndex)

    date.setDate(1)
    renderDays()
  }

  const handleNextMonth = () => {
    const nextMonth = date.getMonth() + 1
    const isNextYear = nextMonth === 12
    const nextYear = isNextYear ? date.getFullYear() + 1 : date.getFullYear()

    date.setMonth(isNextYear ? 0 : nextMonth)
    date.setFullYear(nextYear)

    setCurrentYear(nextYear)

    setCurrentMonth(nextMonth === 12 ? 0 : nextMonth)
    setFirstDayIndex(date.getDay())
    setLastDay(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())
    setPreviousLastDay(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
    setLastDayIndex(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay())
    setNextDays(7 - lastDayIndex)
    date.setDate(1)

    renderDays()
  }

  useEffect(() => {
    renderDays()
  }, [currentMonth])

  return (
    <CSS.Calendar>
      <header>
        <Icon type="fas fa-chevron-left" onClick={handlePreviousMonth} />
        <div className="currentDate">
          <h2>
            {months[currentMonth]} {currentYear}
          </h2>
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
