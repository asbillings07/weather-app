import React from 'react'
import { customRender, cleanup } from '../setupTests'
import { Forecast } from '../components/Forecast'
import { weatherData } from '../mocks/mockData'
import { getWeekDay } from '../helperFunctions/functions'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))

beforeEach(() => {
  cleanup()
})
test('should show 5 day weather forcast', () => {
  const { queryAllByTestId } = customRender(<Forecast weatherData={weatherData.list} />)

  expect(queryAllByTestId('weekDay')).toHaveLength(5)
  expect(queryAllByTestId('weatherStatus')).toHaveLength(5)
  expect(queryAllByTestId('weatherImage')).toHaveLength(5)
  expect(queryAllByTestId('maxTemp')).toHaveLength(5)
  expect(queryAllByTestId('minTemp')).toHaveLength(5)
})

test('Weather Data matches Json data', () => {
  const { queryAllByTestId } = customRender(<Forecast weatherData={weatherData.list} />)
  const weatherMain = weatherData.list[0].weather[0]
  const weatherForcast = weatherData.list

  const weekDay1 = queryAllByTestId('weekDay')[0]
  const weekDay2 = queryAllByTestId('weekDay')[1]

  expect(weekDay1.textContent).toBe('Tomorrow')
  expect(weekDay2.textContent).toBe(getWeekDay(weatherForcast[1].dt)) // shows day of the week

  expect(queryAllByTestId('weatherStatus')[0].textContent).toBe(weatherMain.main)
  expect(queryAllByTestId('weatherImage')[0].alt).toBe(weatherMain.description)
  expect(queryAllByTestId('maxTemp')[0].textContent).toBe(`${Math.round(weatherForcast[0].temp.max)}°`)
  expect(queryAllByTestId('minTemp')[0].textContent).toBe(`${Math.round(weatherForcast[0].temp.min)}°`)
})
