/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { apiUrl } from './config'
import { loadState, saveState } from './localStorage'
import { api } from './request'
const Store = createContext()

function Provider({ children }) {
  const [weatherData, setWeatherData] = useState(loadState())

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = useCallback(async () => {
    const res = await api(apiUrl)
    if (weatherData !== res.data) {
      setWeatherData(res.data)
      saveState(res.data)
    } else {
      return
    }
  }, [weatherData])

  const value = {
    data: weatherData
  }

  return <Store.Provider value={value}>{children}</Store.Provider>
}

/* allows use of State without needing to repeat useContext hook,
 also allows for easier testing */
function useStore() {
  const store = useContext(Store)
  if (!store) throw new Error('Cannot `getStore` outside a context provider')
  return store
}

export { Store, Provider, useStore }
