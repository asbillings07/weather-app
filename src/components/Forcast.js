import PropTypes from 'prop-types'
import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { getWeekDay } from './reusables/DateTimes'
import { getWeatherIcon } from './reusables/Icons'
export const Forcast = ({ weatherData }) => {
  console.log(weatherData)
  return weatherData.map((forcast, i) => (
    <Container key={i}>
      <ForcastWrapper>
        <StatusWrapper>
          <WeekDay variant='h3'>{i === 0 ? 'Tomorrow' : getWeekDay(forcast.dt)}</WeekDay>
          <WeatherStatus variant='h5'>{forcast.weather[0].main}</WeatherStatus>
        </StatusWrapper>
        <WeatherImage src={getWeatherIcon(forcast.weather[0].icon)} alt={forcast.weather[0].description} />
      </ForcastWrapper>
      <TempWrapper>
        <MaxTemp variant='h3'>{`${Math.ceil(forcast.temp.max)}\u00b0`}</MaxTemp>
        <MinTemp variant='h5'>{`${Math.floor(forcast.temp.min)}\u00b0`}</MinTemp>
      </TempWrapper>
    </Container>
  ))
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding: 25px 0px;
  padding-left: 168px;
`
const ForcastWrapper = styled.div`
  display: flex;
  width: 55%;
`
const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  justify-content: center;
`
const WeekDay = styled(Typography)``
const WeatherStatus = styled(Typography)``
const WeatherImage = styled.img``

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MaxTemp = styled(Typography)``
const MinTemp = styled(Typography)`
  align-self: center;
`

Forcast.propTypes = {
  weatherData: PropTypes.array.isRequired
}
