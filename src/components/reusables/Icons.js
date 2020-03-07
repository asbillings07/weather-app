import art_clear from '../../images/art_clear@3x.png'
import art_clouds from '../../images/art_clouds.png'
import art_light_clouds from '../../images/art_light_clouds.png'
import art_fog from '../../images/art_fog.png'
import art_rain from '../../images/art_rain.png'
import art_snow from '../../images/art_snow.png'
import art_storm from '../../images/art_storm.png'
import ic_clear from '../../images/ic_clear.png'
import ic_cloudy from '../../images/ic_cloudy.png'
import ic_fog from '../../images/ic_fog.png'
import ic_light_clouds from '../../images/ic_light_clouds.png'
import art_light_rain from '../../images/art_light_rain.png'
import ic_light_rain from '../../images/ic_light_rain.png'
import ic_rain from '../../images/ic_rain.png'
import ic_snow from '../../images/ic_snow.png'
import ic_storm from '../../images/ic_storm.png'

export const getWeatherIcon = octal => {
  switch (octal) {
    case '01d':
      return art_clear
    case '01n':
      return ic_clear
    case '02d':
      return art_light_clouds
    case '02n':
      return ic_light_clouds
    case '03d':
      return art_clouds
    case '03n':
      return ic_cloudy
    case '04d':
      return art_clouds
    case '04n':
      return ic_cloudy
    case '09d':
      return art_light_rain
    case '09n':
      return ic_light_rain
    case '10d':
      return art_rain
    case '10n':
      return ic_rain
    case '11d':
      return art_storm
    case '11n':
      return ic_storm
    case '13d':
      return art_snow
    case '13n':
      return ic_snow
    case '50d':
      return art_fog
    case '50n':
      return ic_fog
    default:
      return art_clear
  }
}
