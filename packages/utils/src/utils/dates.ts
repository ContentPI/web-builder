const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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

const dates = {
  isWeekend: (date?: string) => {
    const newDate = new Date(date || '')

    return newDate.getDay() === 6 || newDate.getDay() === 0
  },
  weekday: (date?: string, returnStr = false) => {
    const newDate = new Date(date || '')
    const day = newDate.getDay() + 1
    const dayIndex = day === 7 ? 0 : day

    return returnStr ? days[dayIndex] : dayIndex
  },
  getDaysDifference: (date1: string, date2: string) => {
    const difference = new Date(date2).getTime() - new Date(date1).getTime()
    const totalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return totalDays < 0 ? totalDays * -1 : totalDays
  },
  getTwoDigitsDay: (day: number) => {
    if (day <= 9) {
      return `0${day}`
    }

    return day
  },
  getTwoDigitsMonth: (month: number) => {
    if (month <= 9) {
      return `0${month}`
    }

    return month
  },
  getIsToday: (currentDate: any, currentDay: number) =>
    currentDay === new Date().getDate() &&
    currentDate.getMonth() === new Date().getMonth() &&
    currentDate.getFullYear() === new Date().getFullYear(),
  getExistingEvents: (events: any, initialDate: number) =>
    events.filter((event: any) => {
      const start = new Date(event.startDate).getTime()
      const end = new Date(event.endDate).getTime()
      const isInRange = initialDate >= start && initialDate <= end

      return isInRange
    }),
  months,
  days
}

export default dates
