import PropTypes from 'prop-types'
import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { getMonthDay } from './reusables/DateTimes'
import { getWeatherIcon } from './reusables/Icons'

export const Today = ({ weatherData }) => {
  const today = weatherData.list[0]
  const weather = today.weather[0]
  return (
    <Container>
      <WeatherTemps>
        <TodayDate variant='h3'>Today, {getMonthDay(today.dt)} </TodayDate>
        <MaxDegrees>{`${Math.ceil(today.temp.max)}\u00b0`}</MaxDegrees>
        <MinDegrees>{`${Math.floor(today.temp.min)}\u00b0`}</MinDegrees>
      </WeatherTemps>
      <WeatherForcast>
        <WeatherIcon src={getWeatherIcon(weather.icon)} alt={weather.description} />
        <Forcast>{weather.main}</Forcast>
      </WeatherForcast>
    </Container>
  )
}

// Styles
const Container = styled.div`
  background-color: #03a9fa;
  display: flex;
  padding: 25px 0px;
  padding-left: 168px;
`
const WeatherTemps = styled.div``
const TodayDate = styled(Typography)`
  font-size: 50px;
  color: #fff;
`
const MaxDegrees = styled(Typography)`
  font-size: 10em;
  color: #fff;
`
const MinDegrees = styled(Typography)`
  font-size: 7em;
  color: #fff;
`
const WeatherForcast = styled.div`
  display: flex;
  flex-direction: column;
`
const WeatherIcon = styled.img`
  height: 25em;
  width: 25em;
`
const Forcast = styled(Typography)`
  font-size: 5em;
  color: #fff;
  align-self: center;
`
// proptypes
Today.propTypes = {
  weatherData: PropTypes.object.isRequired
}
