import { Typography } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'
import { useStore } from '../Store'
import styled from 'styled-components'
import { roundValue } from '../utils'
import { getWeatherIcon } from './reusables/Icons'

export const Detail = () => {
  const { state } = useStore()
  const match = useRouteMatch();
  const { id } = match.params

  const details = state.weather.forecast[id]

  return (
    <Container>
      <DateWrapper>
        <Today data-testid='today' variant='h4'>
          {details.weekday}s
        </Today>
        <MonthDate data-testid='monthDate' variant='h5'>
          {details.month}
        </MonthDate>
      </DateWrapper>
      <MainContent>
        <TempWrapper>
          <MaxDegrees data-testid='maxDegrees' variant='h1'>{`${details.temp.maxTemp}\u00b0`}</MaxDegrees>
          <MinDegrees data-testid='minDegrees' variant='h3'>{`${details.temp.minTemp}\u00b0`}</MinDegrees>
        </TempWrapper>
        <StatusWrapper>
          <Icon data-testid='icon' src={getWeatherIcon(details.weather.icon)} alt={details.weather.description} />
          <Status data-testid='status' variant='h6'>
            {details.weather.status}
          </Status>
        </StatusWrapper>
      </MainContent>
      <DetailWrapper>
        <Humidity data-testid='humidity' variant='h5'>
          Humidity: {`${details.humidity}\u0025`}
        </Humidity>
        <Pressure data-testid='pressure' variant='h5'>
          Pressure: {details.pressure} hPa
        </Pressure>
        <Wind data-testid='wind' variant='h5'>
          Wind: {roundValue(details.speed)} km/h {details.degrees}
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

Detail.displayName = 'Detail'
