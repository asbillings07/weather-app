import { useStore } from '../Store'
import { SkeletonLoader } from '../components/reusables/SkeletonLoader';
import PropTypes from "prop-types";
import { Detail } from '../components/Detail'
export const WeatherDetails = () => {
  const { state } = useStore()
  return (
    <>
      {state?.weather?.forecast ? (
        <Detail forecast={state.weather.forecast} />
      ) : (
        <SkeletonLoader data-testid="Detail-Skeleton-Loader">
          <SkeletonLoader.Body />
        </SkeletonLoader>
      )}
    </>
  );
}

WeatherDetails.propTypes = {
  match: PropTypes.object.isRequired
}
