/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from 'react'
import { useThunkReducer, useGeoLocation } from './hooks'
import { fetchUserLocation, fetchWeather, reducer, initialState } from './reducers'
import PropTypes from 'prop-types'


const Store = createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState, true)
  useGeoLocation(dispatch)

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  useEffect(() => {
    if (state.geoPosition.coords) {
      dispatch(fetchUserLocation(state.geoPosition.coords));
    }
  }, [state.geoPosition.coords])

  const value = {
    state,
    dispatch,
    fetchWeather,
    fetchUserLocation
  }

  return <Store.Provider value={value}>{children}</Store.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}



export { Store, Provider }
