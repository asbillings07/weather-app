import { useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { roundValue } from '../utils'
import { getWeatherIcon } from './reusables/Icons'
import {
DetailContainer,
DetailStatusWrapper,
DateWrapper,
Today,
MonthDate,
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
        <Today data-testid="today" variant="h4">
          {details.weekday}s
        </Today>
        <MonthDate data-testid="monthDate" variant="h5">
          {details.month}
        </MonthDate>
      </DateWrapper>
      <MainContent>
        <TempWrapper>
          <DetailMaxDegrees
            data-testid="maxDegrees"
            variant="h1"
          >{`${details.temp.maxTemp}\u00b0`}</DetailMaxDegrees>
          <DetailMinDegrees
            data-testid="minDegrees"
            variant="h3"
          >{`${details.temp.minTemp}\u00b0`}</DetailMinDegrees>
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
forecast: PropTypes.object.isRequired
}
Detail.displayName = "Detail";
