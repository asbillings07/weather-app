import { useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { roundValue, getTimeOfDay } from '../utils'
import { getWeatherIcon } from './reusables/Icons'
import {
DetailContainer,
DetailStatusWrapper,
DateWrapper,
MonthDate,
FeelsLikeWrapper,
SubMainContent,
FeelsLikeTemp,
FeelsLikeHeader,
MainContent,
TempWrapper,
DetailMaxDegrees,
DetailMinDegrees,
Icon,
Status,
DetailWrapper,
Humidity,
Pressure,
Wind
} from './componentStyles'

export const Detail = ({ forecast }) => {
  const match = useRouteMatch();
  const { id } = match.params
  const details = forecast[id]

  return (
    <DetailContainer>
      <DateWrapper>
        <MonthDate data-testid="fullDate" variant="h5">
          {details.fullDate}
        </MonthDate>
      </DateWrapper>
      <MainContent>
        <SubMainContent>
          <TempWrapper>
            <DetailMaxDegrees
              data-testid="maxDegrees"
              variant="h1"
            >{`${details.temp.maxTemp}`}</DetailMaxDegrees>
            <DetailMinDegrees
              data-testid="minDegrees"
              variant="h3"
            >{`${details.temp.minTemp}`}</DetailMinDegrees>
          </TempWrapper>
          <DetailStatusWrapper>
            <Icon
              data-testid="icon"
              src={getWeatherIcon(details.weather.icon)}
              alt={details.weather.description}
            />
            <Status data-testid="status" variant="h6">
              {details.weather.status}
            </Status>
          </DetailStatusWrapper>
        </SubMainContent>
        <div>
          <FeelsLikeWrapper data-testid='feels-like-wrapper'>
            <FeelsLikeHeader data-testid='feels-like-header'>
              Feels Like:{" "}
              <FeelsLikeTemp data-testid='feels-like-temp'>
                {details.feelsLike[getTimeOfDay()]}
              </FeelsLikeTemp>
            </FeelsLikeHeader>
          </FeelsLikeWrapper>
        </div>
      </MainContent>

      <DetailWrapper>
        <Humidity data-testid="humidity" variant="h5">
          Humidity: {`${details.humidity}\u0025`}
        </Humidity>
        <Pressure data-testid="pressure" variant="h5">
          Pressure: {details.pressure} hPa
        </Pressure>
        <Wind data-testid="wind" variant="h5">
          Wind: {roundValue(details.speed)} km/h {details.degrees}
        </Wind>
      </DetailWrapper>
    </DetailContainer>
  );
}
Detail.propTypes = {
forecast: PropTypes.array.isRequired
}

Detail.displayName = "Detail";
