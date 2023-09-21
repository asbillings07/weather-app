/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from 'react'
import { useThunkReducer } from './hooks'
import { fetchUserLocation, fetchWeather, reducer, initialState } from './reducers'
import PropTypes from 'prop-types'


const Store = createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState)

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

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
