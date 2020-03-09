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

export const degToCompass = num => {
  while (num < 0) num += 360
  while (num >= 360) num -= 360
  // divide the number then round
  const val = Math.round((num - 11.25) / 22.5)
  const arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  // return the absolute value in the array by index
  return arr[Math.abs(val)]
}

export const roundValue = value => {
  return Math.round(value)
}
