import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { getWeekDay, roundValue } from './reusables/HelperFuncs'
import { getWeatherIcon } from './reusables/Icons'

export const Forcast = ({ weatherData }) => {
  const history = useHistory()

  return weatherData.map((forcast, i) => (
    <Container key={i} onClick={() => history.push(`/details/${i}`)}>
      <ForcastWrapper>
        <StatusWrapper>
          <WeekDay variant='h3'>{i === 0 ? 'Tomorrow' : getWeekDay(forcast.dt)}</WeekDay>
          <WeatherStatus variant='h5'>{forcast.weather[0].main}</WeatherStatus>
        </StatusWrapper>
        <WeatherImage src={getWeatherIcon(forcast.weather[0].icon)} alt={forcast.weather[0].description} />
      </ForcastWrapper>
      <TempWrapper>
        <MaxTemp variant='h3'>{`${roundValue(forcast.temp.max)}\u00b0`}</MaxTemp>
        <MinTemp variant='h5'>{`${roundValue(forcast.temp.min)}\u00b0`}</MinTemp>
      </TempWrapper>
    </Container>
  ))
}

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding: 25px 0px;
  &:hover {
    background: #f5f5f5;
    box-shadow: inset 0px 6px 25px #c1c1c1;
  }
`
const ForcastWrapper = styled.div`
  display: flex;
  width: 60%;
  @media (min-width: 768px) {
    width: 64%;
  }
`
const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  justify-content: center;
`
const WeekDay = styled(Typography)`
  font-size: 17px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const WeatherStatus = styled(Typography)`
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const WeatherImage = styled.img`
  height: 24px;
  width: 24px;
  margin: 0px 10px;
  @media (min-width: 768px) {
    height: 10em;
    width: 10em;
    margin: 0px 25px;
  }
`

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MaxTemp = styled(Typography)`
  font-size: 17px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const MinTemp = styled(Typography)`
  align-self: center;
  font-size: 17px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`

Forcast.propTypes = {
  weatherData: PropTypes.array.isRequired
}
