const dates = {
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
  months: [
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
}

export default dates
