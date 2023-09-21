import { api } from './request'
import { buildWeatherApi, buildLocationApi } from './config'
import { loadState, saveState } from './localStorage'

const ERROR = 'ERROR'
const GETWEATHER = 'GETWEATHER'
const GETGEOLOCATION = 'GETGEOLOCATION'
const LOADING = 'LOADING'
const TOGGLESUCCESS = 'TOGGLESUCCESS'

export const initialState = {
  weather: null,
  location: null,
  success: false,
  error: false,
  errorMessage: null,
  loading: true
}

export const reducer = (state, action) => {
  switch (action.type) {
    case GETGEOLOCATION:
      return {
        ...state,
        location: action.payload.location,
        loading: false
      }
    case GETWEATHER:
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
    case TOGGLESUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

const errorMessage = 'ooops, looks like an error happened!'

export const fetchWeather = ( location = 'Atlanta') => async (dispatch) => {
  dispatch({ type: LOADING })

  const weatherState = loadState()
  if (weatherState && weatherState.city.name) {
    if (weatherState.city.name === location) {
        dispatch({ type: GETWEATHER, payload: { weather: weatherState } })
    }
  } else {
    try {
        const res = await api(buildWeatherApi(location))
        saveState(res.data)
        dispatch({ type: GETWEATHER, payload: { weather: res.data } })
    } catch (err) {
        dispatch({ type: ERROR, payload: { error: errorMessage } })
    }
  }

}

export const fetchUserLocation = (lat = '33.8231296', long = '-84.7904768') => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await api(buildLocationApi(lat, long), true)
    dispatch({ type: GETGEOLOCATION, payload: { location: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

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