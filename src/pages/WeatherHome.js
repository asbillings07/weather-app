import React from 'react'
import { useStore } from '../Store'
import { Today } from '../components/Today'
import { Forcast } from '../components/Forcast'

export const WeatherHome = () => {
  const { data } = useStore()
  console.log(data)
  return (
    <>
      <Today weatherData={data} />
      <Forcast weatherData={data.list} />
    </>
  )
}
