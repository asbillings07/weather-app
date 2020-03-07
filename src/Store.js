/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { apiUrl } from './config'
import { loadState, saveState } from './localStorage'
const Store = createContext()

function Provider({ children }) {
  const [weatherData, setWeatherData] = useState(loadState())
  const fetchWeather = useCallback(async () => {
    const res = await axios.get(apiUrl)
    console.log(res)
    if (res.data === weatherData) {
      return
    } else {
      saveState(res.data)
      setWeatherData(res.data)
    }
  }, [weatherData])

  useEffect(() => {
    fetchWeather()
  }, [])
  console.log(weatherData)

  const value = {
    name: 'Aaron Billings',
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
