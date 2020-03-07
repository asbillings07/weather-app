export const getFullDate = unix => {
  const IsoDate = new Date(unix * 1000)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(IsoDate)
}

export const getMonthDay = unix => {
  const IsoDate = new Date(unix * 1000)
  const options = { month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(IsoDate)
}

export const getWeekDay = unix => {
  const IsoDate = new Date(unix * 1000)
  const options = { weekday: 'long' }
  return new Intl.DateTimeFormat('en-US', options).format(IsoDate)
}
