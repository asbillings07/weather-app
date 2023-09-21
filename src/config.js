const API_KEY = import.meta.env.VITE_APP_API_KEY

export const buildApiUrl = (forecastType = 'daily', location = 'Atlanta', count = 5) => {
    return `https://api.openweathermap.org/data/2.5/forecast/${forecastType}?q=${location}&mode=json&cnt=${count}&units=imperial&APPID=${API_KEY}`
}
