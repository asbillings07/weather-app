import React from 'react'
import { useStore } from '../Store'
import { Today } from '../components/Today'
import { Forcast } from '../components/Forcast'
import { Progress } from '../components/reusables/Progress'

export const WeatherHome = () => {
  const { data } = useStore()
  return (
    <>
      {data ? (
        <>
          <Today weatherData={data} />
          <Forcast weatherData={data.list} />
        </>
      ) : (
        <Progress />
      )}
    </>
  )
}
