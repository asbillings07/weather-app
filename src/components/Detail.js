import PropTypes from 'prop-types'
import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { getMonthDay, getWeekDay, degToCompass, roundValue } from './reusables/HelperFuncs'
import { getWeatherIcon } from './reusables/Icons'

export const Detail = ({ weatherDetails, match }) => {
  const { id } = match.params

  const getDay = (id, day) => {
    // using unary operator to cast as number
    return +id === 0 ? 'Today' : +id === 1 ? 'Tomorrow' : getWeekDay(day)
  }

  const details = weatherDetails[id]

  return (
    <Container>
      <DateWrapper>
        <Today variant='h4'>{getDay(id, details.dt)}</Today>
        <MonthDate variant='h5'>{getMonthDay(details.dt)}</MonthDate>
      </DateWrapper>
      <MainContent>
        <TempWrapper>
          <MaxDegrees variant='h1'>{`${roundValue(details.temp.max)}\u00b0`}</MaxDegrees>
          <MinDegrees variant='h3'>{`${roundValue(details.temp.min)}\u00b0`}</MinDegrees>
        </TempWrapper>
        <StatusWrapper>
          <Icon src={getWeatherIcon(details.weather[0].icon)} alt={details.weather[0].description} />
          <Status variant='h6'>{details.weather[0].main}</Status>
        </StatusWrapper>
      </MainContent>
      <DetailWrapper>
        <Humidity variant='h5'>Humidity: {`${details.humidity} \u0025`}</Humidity>
        <Pressure variant='h5'>Pressure: {details.pressure} hPa</Pressure>
        <Wind variant='h5'>
          Wind: {roundValue(details.speed)} km/h {degToCompass(details.deg)}{' '}
        </Wind>
      </DetailWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto
  width: 100%;
  @media (min-width: 768px) {
    padding: 25px;
  }
`
const DateWrapper = styled.div`
  margin-bottom: 30px;
  align-self: flex-start;
`

const Today = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    font-size: 6em;
  }
`
const MonthDate = styled(Typography)`
  font-size: 12px;
  color: #646464;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`

const MainContent = styled.div`
  display: flex;
  margin-left: 25px;
  margin-bottom: 30px;
  justify-content: center;
`

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const MaxDegrees = styled(Typography)`
  font-size: 72px;
  @media (min-width: 768px) {
    font-size: 15em;
  }
`
const MinDegrees = styled(Typography)`
  font-size: 36px;
  color: #646464;
  align-self: center;
  @media (min-width: 768px) {
    font-size: 8em;
  }
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Status = styled(Typography)`
  font-size: 17px;
  font-weight: lighter;
  color: #646464;
  align-self: center;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const Icon = styled.img`
  height: 75px;
  width: 75px;
  @media (min-width: 768px) {
    height: 32em;
    width: 32em;
  }
`

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Humidity = styled(Typography)`
  font-size: 17px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const Pressure = styled(Typography)`
  font-size: 17px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`
const Wind = styled(Typography)`
  font-size: 17px;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`

Detail.propTypes = {
  weatherDetails: PropTypes.array.isRequired
}
