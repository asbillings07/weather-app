import React from 'react'
import { customRender } from '../setupTests'
import { Today } from '../components/Today'
import { weatherData } from '../mocks/mockData'
import { getMonthDay } from '../helperFunctions/functions'

test("shows Today's weather information with icon", () => {
  const { getByTestId } = customRender(<Today weatherData={weatherData} />)

  const weatherMain = weatherData.list[0].weather[0]
  const weatherForcast = weatherData.list[0]

  expect(getByTestId('todayDate').textContent).toBe(`Today, ${getMonthDay(weatherForcast.dt)}`)
  expect(getByTestId('maxDegrees').textContent).toBe(`${Math.round(weatherForcast.temp.max)}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${Math.round(weatherForcast.temp.min)}°`)
  expect(getByTestId('weatherIcon').alt).toBe(weatherMain.description)
  expect(getByTestId('forcast').textContent).toBe(weatherMain.main)
})
