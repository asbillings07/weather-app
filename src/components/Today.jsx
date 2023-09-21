import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { getMonthDay, roundValue } from '../helperFunctions/functions'
import { getWeatherIcon } from './reusables/Icons'

export const Today = ({ weatherData }) => {
  const today = weatherData.list[0]
  const weather = today.weather[0]
  return (
    <Container>
      <WeatherTemps>
        <TodayDate data-testid='todayDate' variant='h3'>
          Today, {getMonthDay(today.dt)}
        </TodayDate>
        <MaxDegrees data-testid='maxDegrees'>{`${roundValue(today.temp.max)}\u00b0`}</MaxDegrees>
        <MinDegrees data-testid='minDegrees'>{`${roundValue(today.temp.min)}\u00b0`}</MinDegrees>
      </WeatherTemps>
      <WeatherForcast>
        <WeatherIcon data-testid='weatherIcon' src={getWeatherIcon(weather.icon)} alt={weather.description} />
        <Forcast data-testid='forcast'>{weather.main}</Forcast>
      </WeatherForcast>
    </Container>
  )
}

// Styles
const Container = styled.div`
  background-color: #03a9fa;
  display: flex;
  padding: 16px 0px;
  padding-left: 45px;
  @media (min-width: 768px) {
    padding-left: 168px;
  }
`
const WeatherTemps = styled.div`
  width: 48%;
`
const TodayDate = styled(Typography)`
  font-size: 17px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`
const MaxDegrees = styled(Typography)`
  font-size: 54px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 10em;
  }
`
const MinDegrees = styled(Typography)`
  font-size: 27px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 7em;
  }
`
const WeatherForcast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const WeatherIcon = styled.img`
  height: 75px;
  width: 75px;
  @media (min-width: 768px) {
    height: 25em;
    width: 25em;
  }
`
const Forcast = styled(Typography)`
  font-size: 17px;
  color: #fff;
  align-self: center;
  @media (min-width: 768px) {
    font-size: 5em;
  }
`
// proptypes
Today.propTypes = {
  weatherData: PropTypes.object.isRequired
}
Today.displayName = 'Today'