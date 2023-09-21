const API_KEY = import.meta.env.VITE_APP_API_KEY
const USERNAME = import.meta.env.VITE_GEO_USERNAME

export const buildWeatherApi = (location = 'Atlanta') => {
    const forecastType = 'daily',
        count = 5;

    return `https://api.openweathermap.org/data/2.5/forecast/${forecastType}?q=${location}&mode=json&cnt=${count}&units=imperial&APPID=${API_KEY}`
}

export const buildLocationApi = (lat = '33.8231296', long = '-84.7904768') => {
    return `http://api.geonames.org/findNearbyPostalCodesJSON?lat=${lat}&lng=${long}&username=${USERNAME}`
}