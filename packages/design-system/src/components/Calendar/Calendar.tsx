import { cx, dates } from '@web-builder/utils'
import React, { FC, useEffect, useState } from 'react'

import Icon from '../Icon'
import { CSS } from './Calendar.styled'

const date = new Date()

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

  const renderEvents = ({
    x,
    isToday,
    currentDate,
    existingEvents
  }: {
    x: number
    isToday: boolean
    currentDate: string
    existingEvents: Event[]
  }) => (
    <li
      className={isToday ? 'today' : 'day'}
      onClick={() => handleDayClick(existingEvents)}
      id={currentDate}
      key={currentDate}
    >
      <span className="dayNumber">{x}</span>
      {existingEvents.map((event: Event, i: number) => (
        <div
          className={cx.join('event', `event${i + 1}`)}
          style={event.color ? { background: event.color } : {}}
        >
          {event.title}
        </div>
      ))}
    </li>
  )

  const renderDays = () => {
    const daysArr = []

    for (let h = firstDayIndex; h > 0; h -= 1) {
      const currentDay = previousLastDay - h + 1
      const month = currentMonth
      const currentDate: string = `${
        month === -1 ? currentYear - 1 : currentYear
      }-${dates.getTwoDigitsMonth(month === -1 ? 12 : month)}-${dates.getTwoDigitsDay(currentDay)}`

      const initialDate = new Date(currentDate).getTime()

      const existingEvent = events.find((event: Event) => {
        const start = new Date(event.startDate).getTime()
        const end = new Date(event.endDate).getTime()

        return initialDate >= start && initialDate <= end
      })

      daysArr.push(
        <li className="previousMonth" id={currentDate} key={currentDate}>
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
      const isToday = dates.getIsToday(date, i)

      const currentDate: string = `${currentYear}-${dates.getTwoDigitsMonth(
        currentMonth + 1
      )}-${dates.getTwoDigitsDay(i)}`

      const initialDate = new Date(currentDate).getTime()

      const existingEvents = dates.getExistingEvents(events, initialDate)

      if (existingEvents.length > 0) {
        daysArr.push(renderEvents({ x: i, currentDate, isToday, existingEvents }))
      } else {
        daysArr.push(
          <li
            className={isToday ? 'today' : 'day'}
            onClick={() => handleDayClick(currentDate)}
            id={currentDate}
            key={currentDate}
          >
            <span className="dayNumber">{i}</span>
          </li>
        )
      }
    }

    for (let j = 1; j < nextDays; j += 1) {
      const month = currentMonth + 2
      const currentDate: string = `${
        month === 13 ? currentYear + 1 : currentYear
      }-${dates.getTwoDigitsMonth(month === 13 ? 1 : month)}-${dates.getTwoDigitsDay(j)}`

      const initialDate = new Date(currentDate).getTime()

      const existingEvent = events.find((event: Event) => {
        const start = new Date(event.startDate).getTime()
        const end = new Date(event.endDate).getTime()

        return initialDate >= start && initialDate <= end
      })

      daysArr.push(
        <li className="nextMonth" id={currentDate} key={currentDate}>
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

  const updateStates = ({ year, month, firstDay, last, prevLastDay, lastIndex }: any) => {
    setCurrentYear(year)
    setCurrentMonth(month)
    setFirstDayIndex(firstDay)
    setLastDay(last)
    setPreviousLastDay(prevLastDay)
    setNextDays(7 - lastIndex)
    setLastDayIndex(lastIndex)

    date.setDate(1)
    renderDays()
  }

  const handlePreviousMonth = () => {
    const prevMonth = date.getMonth() - 1
    const isPrevYear = prevMonth === -1
    const prevYear = isPrevYear ? date.getFullYear() - 1 : date.getFullYear()

    date.setMonth(isPrevYear ? 11 : prevMonth)
    date.setFullYear(prevYear)

    updateStates({
      year: prevYear,
      month: prevMonth === -1 ? 11 : prevMonth,
      firstDay: date.getDay(),
      last: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      prevLastDay: new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
      lastIndex: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    })
  }

  const handleNextMonth = () => {
    const nextMonth = date.getMonth() + 1
    const isNextYear = nextMonth === 12
    const nextYear = isNextYear ? date.getFullYear() + 1 : date.getFullYear()

    date.setMonth(isNextYear ? 0 : nextMonth)
    date.setFullYear(nextYear)

    updateStates({
      year: nextYear,
      month: nextMonth === 12 ? 0 : nextMonth,
      firstDay: date.getDay(),
      last: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
      prevLastDay: new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
      lastIndex: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
    })
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
            {dates.months[currentMonth]} {currentYear}
          </h2>
        </div>
        <Icon type="fas fa-chevron-right" onClick={handleNextMonth} />
      </header>

      <ul className="weekdays">
        {dates.days.map((day: string) => (
          <li>{day}</li>
        ))}
      </ul>

      <ol className="dayGrid">{days}</ol>
    </CSS.Calendar>
  )
}

export default Calendar
