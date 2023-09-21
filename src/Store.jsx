/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react'
import { buildApiUrl } from './config'
import { loadState, saveState } from './localStorage'
import { api } from './request'
const Store = createContext()

const Provider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(loadState())

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await api(buildApiUrl())
        if (weatherData !== res.data) {
          setWeatherData(res.data)
          saveState(res.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchWeather()
  }, [])

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
