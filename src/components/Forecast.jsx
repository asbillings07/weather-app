import { useHistory } from 'react-router-dom'
import { SkeletonLoader } from './reusables/SkeletonLoader'
import { useStore } from '../Store'
import { getWeatherIcon } from './reusables/Icons'
import { 
  ForecastContainer, 
  ForecastSubContainer, 
  ForecastWrapper, 
  StatusWrapper, 
  WeekDay, 
  WeatherStatus,
  WeatherImage,
  TempWrapper,
  MaxTemp,
  MinTemp
} from './componentStyles'

export const Forecast = () => {
  const { state } = useStore()
  const history = useHistory()

  const forecastElements = state?.weather?.forecast?.map((forecast, i) => (
    <ForecastSubContainer key={i} onClick={() => history.push(`/details/${i}`)}>
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
    </ForecastSubContainer>
  ));

  const skeletonForecastLoader = [1, 2, 3, 4, 5].map((item) => (
    <SkeletonLoader.Container
      key={item}
      display="flex"
      data-testid={`Forecast-Skeleton-Loader-${item}`}
    >
      <SkeletonLoader.Container>
        <SkeletonLoader.Body />
        <SkeletonLoader.Body />
      </SkeletonLoader.Container>
      <SkeletonLoader.Container>
        <SkeletonLoader.Body />
        <SkeletonLoader.Body />
      </SkeletonLoader.Container>
    </SkeletonLoader.Container>
  ));

  return (
    <>
      {state?.weather?.forecast && Array.isArray(state.location) ? (
        <ForecastContainer>{forecastElements}</ForecastContainer>
      ) : (
        <SkeletonLoader style={{flexDirection: 'column'}}>{skeletonForecastLoader}</SkeletonLoader>
      )}
    </>
  );
}

Forecast.displayName = "Forecast";
