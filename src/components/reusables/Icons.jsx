import artClear from '../../images/art_clear.png'
import artClouds from '../../images/art_clouds.png'
import artLightClouds from '../../images/art_light_clouds.png'
import artFog from '../../images/art_fog.png'
import artRain from '../../images/art_rain.png'
import artSnow from '../../images/art_snow.png'
import artStorm from '../../images/art_storm.png'
import icClear from '../../images/ic_clear.png'
import icCloudy from '../../images/ic_cloudy.png'
import icFog from '../../images/ic_fog.png'
import icLightClouds from '../../images/ic_light_clouds.png'
import artLightRain from '../../images/art_light_rain.png'
import icLightRain from '../../images/ic_light_rain.png'
import icRain from '../../images/ic_rain.png'
import icSnow from '../../images/ic_snow.png'
import icStorm from '../../images/ic_storm.png'

export const getWeatherIcon = octal => {
  switch (octal) {
    case '01d':
      return artClear
    case '01n':
      return icClear
    case '02d':
      return artLightClouds
    case '02n':
      return icLightClouds
    case '03d':
      return artClouds
    case '03n':
      return icCloudy
    case '04d':
      return artClouds
    case '04n':
      return icCloudy
    case '09d':
      return artLightRain
    case '09n':
      return icLightRain
    case '10d':
      return artRain
    case '10n':
      return icRain
    case '11d':
      return artStorm
    case '11n':
      return icStorm
    case '13d':
      return artSnow
    case '13n':
      return icSnow
    case '50d':
      return artFog
    case '50n':
      return icFog
    default:
      return artClear
  }
}
