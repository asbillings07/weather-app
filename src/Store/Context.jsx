/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react'
import { useThunkReducer, useGeoLocation } from './hooks'
import { fetchUserLocation, fetchWeather, reducer, initialState } from './reducers'
import PropTypes from 'prop-types'


const Store = createContext()
const DEFAULT_CITY = 'Atlanta'

const Provider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState, true)
  const city = Array.isArray(state.location)
     ? state.location[0].city
     : DEFAULT_CITY;
  const [location, setLocation] = useState(city);
  useGeoLocation(dispatch)

  useEffect(() => {
      if (state.geoPosition.coords) {
        dispatch(fetchUserLocation(state.geoPosition.coords));
      }
  }, [state.geoPosition.coords]);

  useEffect(() => {
          console.log("Is this running?? FETCH WEATHER", city);
          setLocation(city);
          dispatch(fetchWeather(city));
  }, [city])



  const value = {
    state,
    defaultCity: DEFAULT_CITY,
    location,
    setLocation,
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
