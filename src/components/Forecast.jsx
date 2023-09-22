import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { useStore } from '../Store'
import { getWeatherIcon } from './reusables/Icons'

export const Forecast = () => {
  const { state } = useStore()
  const history = useHistory()
  return state.weather?.forecast?.map((forecast, i) => (
    <Container key={i} onClick={() => history.push(`/details/${i}`)}>
      <ForecastWrapper>
        <StatusWrapper>
          <WeekDay data-testid="weekDay" variant="h3">
            {forecast.weekday}
          </WeekDay>
          <WeatherStatus data-testid="weatherStatus" variant="h5">
            {forecast.weather.status}
          </WeatherStatus>
        </StatusWrapper>
        <WeatherImage
          data-testid="weatherImage"
          src={getWeatherIcon(forecast.weather.icon)}
          alt={forecast.weather.description}
        />
      </ForecastWrapper>
      <TempWrapper>
        <MaxTemp
          data-testid="maxTemp"
          variant="h3"
        >{`${forecast.temp.maxTemp}\u00b0`}</MaxTemp>
        <MinTemp
          data-testid="minTemp"
          variant="h5"
        >{`${forecast.temp.minTemp}\u00b0`}</MinTemp>
      </TempWrapper>
    </Container>
  ));
}

Forecast.displayName = "Forecast";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  padding: 25px 0px;
  &:hover {
    background: #f5f5f5;
    box-shadow: inset 0px 6px 25px #c1c1c1;
  }
`
const ForecastWrapper = styled.div`
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

