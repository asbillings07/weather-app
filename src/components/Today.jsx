
import { useStore } from '../Store'
import { IconButton } from '@material-ui/core';
import PersonPinCircleSharpIcon from "@material-ui/icons/PersonPinCircleSharp";
// import { LocationDropDown } from './reusables/DropDown'
import { Typography } from '@material-ui/core'
import { SkeletonLoader } from './reusables/SkeletonLoader'
import styled from 'styled-components'
// import { Input } from './reusables/Input'
import { getWeatherIcon } from './reusables/Icons'

export const Today = () => {
  const { state, location } = useStore();
  console.log('Weather', state.weather)
  const weatherData = state.weather
  const today = weatherData?.forecast[0]
  const weather = today?.weather



  return (
    <>
      {state.weather && Array.isArray(state.location) ? (
        <TodayContainer>
          <WeatherTemps>
            <TodayDate data-testid="todayDate" variant="h3">
              Today, {today?.month}
            </TodayDate>
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
            <MaxDegrees data-testid="maxDegrees">{`High: ${today?.temp?.maxTemp}\u00b0`}</MaxDegrees>
            <MinDegrees data-testid="minDegrees">{`Low: ${today?.temp?.minTemp}\u00b0`}</MinDegrees>
          </WeatherTemps>
          <WeatherForecast>
            <Location data-testid="location">
              <IconButton color='inherit'>
                <PersonPinCircleSharpIcon /> {location}
              </IconButton>

              {/* <LocationDropDown
                location={location}
                buttonLabel={}
                selectLabel="location"
                setLocation={setLocation}
                locationList={state.location}
              /> */}
            </Location>
            <WeatherIcon
              data-testid="weatherIcon"
              src={getWeatherIcon(weather?.icon)}
              alt={weather?.description}
            />
            <Forecast data-testid="forecast">{weather?.main}</Forecast>
          </WeatherForecast>
        </TodayContainer>
      ) : (
        <SkeletonLoader
          styles={{ height: "100%", backgroundColor: "rgb(3, 169, 250)" }}
        >
          <SkeletonLoader.Container>
            <SkeletonLoader.Text height="25px" />
            <SkeletonLoader.Body height="30px" />
            <SkeletonLoader.Body height="40px" />
          </SkeletonLoader.Container>
          <SkeletonLoader.Container>
            <SkeletonLoader.Text height="25px" />
            <SkeletonLoader.Body height="30px" />
            <SkeletonLoader.Body height="40px" />
          </SkeletonLoader.Container>
        </SkeletonLoader>
      )}
    </>
  );
}

// Styles
const TodayContainer = styled.div`
  background-color: #03a9fa;
  display: flex;
  padding: 16px 0px 40px 40px;
  @media (min-width: 768px) {
    padding: 16px 168px 40px 40px;
  }
`;

const WeatherTemps = styled.div`
  width: 48%;
`
const TodayDate = styled(Typography)`
  font-size: 25px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`
const Location = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
const MaxDegrees = styled(Typography)`
  font-size: 45px;
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