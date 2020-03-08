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
  console.log(details)

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
  padding: 25px;
  margin: auto
  width: 100%;
`
const DateWrapper = styled.div`
  margin-bottom: 30px;
  align-self: flex-start;
`
const Today = styled(Typography)`
  font-size: 6em;
`
const MonthDate = styled(Typography)`
  font-size: 3em;
  color: #646464;
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
  width: 30%;
`
const MaxDegrees = styled(Typography)`
  font-size: 15em;
`
const MinDegrees = styled(Typography)`
  font-size: 8em;
  color: #646464;
  align-self: center;
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Status = styled(Typography)`
  font-size: 3em;
  font-weight: lighter;
  color: #646464;
  align-self: center;
`
const Icon = styled.img`
  height: 32em;
  width: 32em;
`

const DetailWrapper = styled.div`
  align-self: flex-start;
`
const Humidity = styled(Typography)``
const Pressure = styled(Typography)``
const Wind = styled(Typography)``

Detail.propTypes = {
  weatherDetails: PropTypes.array.isRequired
}
