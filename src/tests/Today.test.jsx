import { customRender } from '../setupTests'
import { describe, it, expect } from 'vitest';
import { Today } from '../components/Today'
import { weatherData } from '../mocks/mockData'
import { getMonthDay } from '../helperFunctions/functions'

describe('Today.jsx', () => {
it("shows Today's weather information with icon", () => {
  const { getByTestId } = customRender(<Today weatherData={weatherData} />)

  const weatherMain = weatherData.list[0].weather[0]
  const weatherForcast = weatherData.list[0]

  expect(getByTestId('todayDate').textContent).toBe(`Today, ${getMonthDay(weatherForcast.dt)}`)
  expect(getByTestId('maxDegrees').textContent).toBe(`${Math.round(weatherForcast.temp.max)}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${Math.round(weatherForcast.temp.min)}°`)
  expect(getByTestId('weatherIcon').alt).toBe(weatherMain.description)
  expect(getByTestId('forcast').textContent).toBe(weatherMain.main)
})
})

