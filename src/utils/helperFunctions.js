export const getFullDate = unix => {
  const IsoDate = new Date(unix * 1000)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(IsoDate)
}

export const getTime = (unix) => {
  const IsoDate = new Date(unix * 1000);
  const options = {
    timeStyle: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(IsoDate);
};

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


const mapLocationObject = (obj) => {
    return {
      state_short: obj["adminCode1"],
      state_long: obj["adminName1"],
      county: obj["adminCode2"],
      countryCode: obj["countryCode"],
      distance: obj["distance"],
      latitude: obj["lat"],
      longitude: obj["lng"],
      city: obj["placeName"],
      postalCode: obj["postalCode"],
    };
}

export const mapLocationData = (locationDataArray) => {
    return locationDataArray.map((location) => mapLocationObject(location))
}

const parseForecast = (forecastList) => {
  return forecastList.map((forecast, i) => ({
    degrees: degToCompass(forecast.deg),
    weekday: i === 0 ? "Tomorrow" : getWeekDay(forecast.dt),
    month: getMonthDay(forecast.dt),
    fullDate: getFullDate(forecast.dt),
    feelsLike: forecast.feels_like,
    gust: forecast.gust,
    humidity: forecast.humidity,
    pressure: forecast.pressure,
    speed: forecast.speed,
    sunrise: getTime(forecast.sunrise),
    sunset: getTime(forecast.sunset),
    temp: {
      day: forecast.temp.day,
      evening: roundValue(forecast.temp.eve),
      maxTemp: roundValue(forecast.temp.max),
      minTemp: roundValue(forecast.temp.min),
      morning: roundValue(forecast.temp.morn),
      night: roundValue(forecast.temp.night),
    },
    weather: {
      status: forecast.weather[0].main,
      icon: forecast.weather[0].icon,
      description: forecast.weather[0].description
    },
  }));
}

export const parseWeatherData = (data) => {
  return {
    city: {
      country: data.city.country,
      name: data.city.name,
      timezone: data.city.timezone,
    },
    forecast: parseForecast(data.list),
  };
}