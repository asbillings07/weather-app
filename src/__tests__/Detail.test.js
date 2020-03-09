import React from 'react'
import { customRender, cleanup } from '../setupTests'
import { Detail } from '../components/Detail'
import { weatherData } from '../mocks/mockData'
import { degToCompass, getMonthDay } from '../helperFunctions/functions'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))

beforeEach(() => {
  cleanup()
})

test('should show detail weather forcast elements', () => {
  const match = {
    params: {
      id: 0
    }
  }
  const { getByTestId } = customRender(<Detail weatherDetails={weatherData.list} match={match} />)

  expect(getByTestId('today')).toBeTruthy()
  expect(getByTestId('monthDate')).toBeTruthy()
  expect(getByTestId('maxDegrees')).toBeTruthy()
  expect(getByTestId('minDegrees')).toBeTruthy()
  expect(getByTestId('icon')).toBeTruthy()
  expect(getByTestId('status')).toBeTruthy()
  expect(getByTestId('humidity')).toBeTruthy()
  expect(getByTestId('pressure')).toBeTruthy()
  expect(getByTestId('wind')).toBeTruthy()
})

test('Detail Page matches Today weather Details', () => {
  const match = {
    params: {
      id: 0
    }
  }
  const { getByTestId } = customRender(<Detail weatherDetails={weatherData.list} match={match} />)
  const { id } = match.params
  const weatherMain = weatherData.list[id].weather[0]
  const forecast = weatherData.list[id]

  expect(getByTestId('today').textContent).toBe('Today')
  expect(getByTestId('monthDate').textContent).toBe(getMonthDay(forecast.dt))
  expect(getByTestId('maxDegrees').textContent).toBe(`${Math.round(forecast.temp.max)}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${Math.round(forecast.temp.min)}°`)
  expect(getByTestId('icon').alt).toBe(weatherMain.description)
  expect(getByTestId('status').textContent).toBe(weatherMain.main)
  expect(getByTestId('humidity').textContent).toBe(`Humidity: ${forecast.humidity}%`)
  expect(getByTestId('pressure').textContent).toBe(`Pressure: ${forecast.pressure} hPa`)
  expect(getByTestId('wind').textContent).toBe(`Wind: ${Math.round(forecast.speed)} km/h ${degToCompass(forecast.deg)}`)
})

test('Detail Page matches Tomorrow weather Details', () => {
  const match = {
    params: {
      id: 1
    }
  }
  const { getByTestId } = customRender(<Detail weatherDetails={weatherData.list} match={match} />)
  const { id } = match.params
  const weatherMain = weatherData.list[id].weather[0]
  const forecast = weatherData.list[id]

  expect(getByTestId('today').textContent).toBe('Tomorrow')
  expect(getByTestId('monthDate').textContent).toBe(getMonthDay(forecast.dt))
  expect(getByTestId('maxDegrees').textContent).toBe(`${Math.round(forecast.temp.max)}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${Math.round(forecast.temp.min)}°`)
  expect(getByTestId('icon').alt).toBe(weatherMain.description)
  expect(getByTestId('status').textContent).toBe(weatherMain.main)
  expect(getByTestId('humidity').textContent).toBe(`Humidity: ${forecast.humidity}%`)
  expect(getByTestId('pressure').textContent).toBe(`Pressure: ${forecast.pressure} hPa`)
  expect(getByTestId('wind').textContent).toBe(`Wind: ${Math.round(forecast.speed)} km/h ${degToCompass(forecast.deg)}`)
})
