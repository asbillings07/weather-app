
import { useStore } from '../Store'
import { IconButton } from '@material-ui/core';
import PersonPinCircleSharpIcon from "@material-ui/icons/PersonPinCircleSharp";
// import { LocationDropDown } from './reusables/DropDown'
import { SkeletonLoader } from './reusables/SkeletonLoader'
import {
TodayMaxDegrees,
TodayMinDegrees,
TodayContainer,
WeatherTemps,
WeatherForecast,
Location,
WeatherIcon,
TodayForecast
} from './componentStyles'
import { getWeatherIcon } from './reusables/Icons'

export const Today = () => {
  const { state, location } = useStore();
  const weatherData = state.weather
  const today = weatherData?.forecast[0]
  const weather = today?.weather

  return (
    <>
      {state.weather && Array.isArray(state.location) ? (
        <TodayContainer>
          <WeatherTemps>
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
            <TodayMaxDegrees
              fontSize="72px"
              data-testid="maxDegrees"
            >{`High: ${today?.temp?.maxTemp}`}</TodayMaxDegrees>
            <TodayMinDegrees
              fontSize="36px"
              data-testid="minDegrees"
            >{`Low: ${today?.temp?.minTemp}`}</TodayMinDegrees>
          </WeatherTemps>
          <WeatherForecast>
            <Location data-testid="location">
              <IconButton color="inherit">
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
            <TodayForecast data-testid="forecast">
              {weather?.status}
            </TodayForecast>
          </WeatherForecast>
        </TodayContainer>
      ) : (
        <SkeletonLoader
          styles={{ height: "100%", backgroundColor: "rgb(3, 169, 250)" }}
        >
          <SkeletonLoader.Container data-testid="Today-Skeleton-Loader">
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

Today.displayName = 'Today'