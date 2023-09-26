const API_KEY = import.meta.env.VITE_APP_API_KEY
const USERNAME = import.meta.env.VITE_GEO_USERNAME

export const buildWeatherApi = (location = 'Atlanta') => {
    const forecastType = 'daily',
        count = 5;

    return `https://api.openweathermap.org/data/2.5/forecast/${forecastType}?q=${location}&mode=json&cnt=${count}&units=imperial&APPID=${API_KEY}`
}

export const buildLocationApi = ({
  latitude = "33.8231296",
  longitude = "-84.7904768",
}) => {
  return `https://secure.geonames.org/findNearbyPostalCodesJSON?lat=${latitude}&lng=${longitude}&username=${USERNAME}`;
};