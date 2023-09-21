import { useStore } from '../Store'
import PropTypes from "prop-types";
import { Detail } from '../components/Detail'
export const WeatherDetails = ({ match }) => {
  const { data } = useStore()
  return <Detail weatherDetails={data.list} match={match} />
}

WeatherDetails.propTypes = {
  match: PropTypes.object.isRequired
}
