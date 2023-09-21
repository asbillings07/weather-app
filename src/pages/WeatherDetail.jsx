import { useStore } from '../Store'
import PropTypes from "prop-types";
import { Detail } from '../components/Detail'
export const WeatherDetails = ({ match }) => {
  const { state } = useStore()
  return <Detail weatherDetails={state.weather.list} match={match} />
}

WeatherDetails.propTypes = {
  match: PropTypes.object.isRequired
}
