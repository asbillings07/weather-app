import { useStore } from '../Store'
import { SkeletonLoader } from '../components/reusables/SkeletonLoader';
import PropTypes from "prop-types";
import { Detail } from '../components/Detail'
export const WeatherDetails = ({ match }) => {
  const { state } = useStore()
  return (
    <>
    {
      state?.weather?.forecast ? (
        <Detail weatherDetails={state.weather.forecast} match={match} />
      ) :
      (
        <SkeletonLoader>
          <SkeletonLoader.Body />
        </SkeletonLoader>
      )
    }
    </>
  )
}

WeatherDetails.propTypes = {
  match: PropTypes.object.isRequired
}
