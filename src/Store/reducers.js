import { api } from './request'
import { buildWeatherApi, buildLocationApi } from './config'
import { loadState, saveState } from './localStorage'
import { mapLocationData, parseWeatherData } from "../utils";

const ERROR = 'ERROR'
const GET_WEATHER = "GET_WEATHER";
const GET_GEO_POSITION = "GET_GEO_POSITION";
const GET_LOCATION = "GET_LOCATION";
const LOADING = 'LOADING'
const TOGGLE_SUCCESS = "TOGGLE_SUCCESS";

export const reducerTypes = {
  ERROR,
  GET_GEO_POSITION,
  GET_LOCATION,
  GET_WEATHER,
  LOADING,
  TOGGLE_SUCCESS
}

export const initialState = {
  weather: null,
  location: null,
  success: false,
  geoPosition: {
    status: 'idle',
    coords: null,
    error: null
  },
  error: false,
  errorMessage: null,
  loading: true
}
const errorMessage = "ooops, looks like an error happened!";
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_GEO_POSITION:
      return {
        ...state,
        geoPosition: {
          status: action.payload.geoPosition.status,
          coords: action.payload.geoPosition.coords,
          error: action.payload.geoPosition.error,
        },
        loading: false,
      };
    case GET_LOCATION:
            return {
              ...state,
              location: action.payload.location,
              loading: false,
            }
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload.weather,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case TOGGLE_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action?.payload?.error ?? errorMessage,
        loading: false
      }
    default:
      return state
  }
}



export const fetchWeather = ( location = 'Atlanta') => async (dispatch) => {
  dispatch({ type: LOADING })

  const weather = loadState('weatherData')
  if (weather && weather.city.name === location) {
    dispatch({ type: GET_WEATHER, payload: { weather: weather } });
  } else {
    try {
      const res = await api(buildWeatherApi(location));
      const weather = parseWeatherData(res.data);
      saveState("weatherData", weather);
      dispatch({ type: GET_WEATHER, payload: { weather } });
    } catch (err) {
      dispatch({ type: ERROR, payload: { error: errorMessage } });
    }
  }

}

export const fetchUserLocation = ({ latitude, longitude }) =>
  async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const storedLocation = loadState('userLocation')
      if (Array.isArray(storedLocation) && storedLocation[0].latitude === latitude && storedLocation[0].longitude === longitude) {
          dispatch({ type: GET_LOCATION, payload: { location: storedLocation } });
      } else {
        const res = await api(buildLocationApi({ latitude, longitude }));
        const userLocation = mapLocationData(res.data.postalCodes)
        saveState('userLocation', userLocation)
        dispatch({ type: GET_LOCATION, payload: { location: userLocation } });
      }

    } catch (err) {
      dispatch({ type: ERROR, payload: { error: errorMessage } });
    }
  };

// export const fetchComment = (id) => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await api(routes.GETCOMMENT)
//     dispatch({ type: GETCOMMENT, payload: { comment: res.data } })
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }

// export const createComment = ({name, comment}) => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await api(routes.CREATECOMMENT, 'POST', { name, message: comment })
//     dispatch({ type: CREATECOMMENT, payload: { comment: res.data } })
//     dispatch({ type: TOGGLESUCCESS, payload: false })
//     dispatch(fetchComments()(dispatch))
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }

// export const deleteComments = () => async (dispatch) => {
//   dispatch({ type: LOADING })
//   try {
//     const res = await api(routes.DELETECOMMENT, 'DELETE')
//     dispatch({ type: DELETECOMMENT, payload: { message: res.data } })
//     dispatch({ type: TOGGLESUCCESS, payload: false })
//     dispatch(fetchComments(dispatch))
//   } catch (err) {
//     dispatch({ type: ERROR, payload: { error: errorMessage } })
//   }
// }