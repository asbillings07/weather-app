import React from 'react'
import { useStore } from '../Store'
import { Today } from '../components/Today'
import { Forecast } from '../components/Forecast'
import { Progress } from '../components/reusables/Progress'

export const WeatherHome = () => {
  const { data } = useStore()
  return (
    <>
      {data ? (
        <>
          <Today weatherData={data} />
          <Forecast weatherData={data.list} />
        </>
      ) : (
        <Progress />
      )}
    </>
  )
}
