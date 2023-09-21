/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { reducerTypes } from '../reducers'

export const useGeoLocation = (
  dispatch
) => {
  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({
        type: reducerTypes.ERROR,
        error: new Error("Geolocation is not supported"),
      });
      return;
    }

    dispatch({ type: reducerTypes.LOADING });
    const positionSuccess = (position) => {
      dispatch({
        type: reducerTypes.GET_GEO_POSITION,
        payload: {
          geoPosition: {
            status: "resolved",
            coords: position.coords,
            error: null,
          },
        },
      });
    };
    const positionError = (error) =>
      dispatch({
        type: reducerTypes.ERROR,
        payload: {
          geoPosition: {
            status: "rejected",
            position: null,
            error: error,
          },
        },
      });
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };

    const geoWatch = navigator.geolocation.watchPosition(
      positionSuccess,
      positionError,
      options
    );
    return () => navigator.geolocation.clearWatch(geoWatch);
  }, []);
};