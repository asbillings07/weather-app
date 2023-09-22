import { useState } from 'react'
import { useStore } from '../Store'
import { LocationDropDown } from './reusables/DropDown'
import { Typography } from '@material-ui/core'
import { SkeletonLoader } from './reusables/SkeletonLoader'
import styled from 'styled-components'
import { Input } from './reusables/Input'
import { getWeatherIcon } from './reusables/Icons'

export const Today = () => {
  const { state, defaultCity, location, setLocation } = useStore();
  console.log(state.weather)
  const weatherData = state.weather
  const today = weatherData?.forecast[0]
  const weather = today?.weather
  return (
    <Container>
      <WeatherTemps>
        <SkeletonLoader loading={state.loading}>
          <TodayDate data-testid="todayDate" variant="h3">
            Today, {today?.month}
          </TodayDate>
        </SkeletonLoader>
        <Location data-testid="location">
          {Array.isArray(state.location) &&
          state.location[0].city !== defaultCity ? (
            <LocationDropDown
              location={location}
              buttonLabel={`Current Location: ${location}`}
              selectLabel="location"
              setLocation={setLocation}
              locationList={state.location}
            />
          ) : (
            <SkeletonBaseLoader></SkeletonBaseLoader>
          )}
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
        <MaxDegrees data-testid="maxDegrees">{`${today?.temp?.maxTemp}\u00b0`}</MaxDegrees>
        <MinDegrees data-testid="minDegrees">{`${today?.temp?.minTemp}\u00b0`}</MinDegrees>
      </WeatherTemps>
      <WeatherForecast>
        <WeatherIcon
          data-testid="weatherIcon"
          src={getWeatherIcon(weather?.icon)}
          alt={weather?.description}
        />
        <Forecast data-testid="forecast">{weather?.main}</Forecast>
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
const SkeletonBaseLoader = styled.div`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  width: 52%;
  height: 1.7rem;
  border-radius: 0.25rem;
`;
const SkeletonText = styled(SkeletonBaseLoader)` 
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
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

Today.displayName = 'Today'