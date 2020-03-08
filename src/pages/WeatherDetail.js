import React from 'react'
import { useStore } from '../Store'
import { Detail } from '../components/Detail'
export const WeatherDetails = ({ match }) => {
  const { data } = useStore()
  return <Detail weatherDetails={data.list} match={match} />
}
