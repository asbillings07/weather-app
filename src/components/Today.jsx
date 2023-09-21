import PropTypes from 'prop-types'
import { useState } from 'react'
import { useStore } from '../Store'
import { LocationDropDown } from './reusables/DropDown'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Input } from './reusables/Input'
import { getMonthDay, roundValue } from '../helperFunctions/functions'
import { getWeatherIcon } from './reusables/Icons'

export const Today = () => {
  const [location, setLocation] = useState('Atlanta');
  const { state } = useStore()
  console.log(state.location)
  const weatherData = state.weather
  const today = weatherData.list[0]
  const weather = today.weather[0]
  return (
    <Container>
      <WeatherTemps>
        <TodayDate data-testid="todayDate" variant="h3">
          Today, {getMonthDay(today.dt)}
        </TodayDate>
        <Location data-testid="location">
          <LocationDropDown
            location={location}
            buttonLabel={`Current Location: ${location}`}
            selectLabel="location"
            setLocation={setLocation}
            locationList={[]}
          />
        </Location>

        {/* <Input
          placeholder="Enter zip code or city"
          label="Location:"
          domID="location"
          name="location"
          initialValue={location}
          textColor="black"
          errorMessage="Name field can not be submitted when empty"
          onChange={(e) => setLocation(e.target.value)}
        /> */}
        <MaxDegrees data-testid="maxDegrees">{`${roundValue(
          today.temp.max
        )}\u00b0`}</MaxDegrees>
        <MinDegrees data-testid="minDegrees">{`${roundValue(
          today.temp.min
        )}\u00b0`}</MinDegrees>
      </WeatherTemps>
      <WeatherForecast>
        <WeatherIcon
          data-testid="weatherIcon"
          src={getWeatherIcon(weather.icon)}
          alt={weather.description}
        />
        <Forecast data-testid="forecast">{weather.main}</Forecast>
      </WeatherForecast>
    </Container>
  );
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
const Location = styled.div`
  font-size: 15px;
  margin-left: -6px;
  margin-top: 10px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
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
const WeatherForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const WeatherIcon = styled.img`
  height: 75px;
  width: 75px;
  @media (min-width: 768px) {
    height: 25em;
    width: 25em;
  }
`
const Forecast = styled(Typography)`
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