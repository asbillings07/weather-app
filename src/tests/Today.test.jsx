import { customRender } from '../setupTests'
import { describe, it, expect } from 'vitest';
import { Today } from '../components/Today'
import { weatherData } from '../mocks/mockData'

describe('Today.jsx', () => {
it("shows Today's weather information with icon", () => {
  const { getByTestId } = customRender(<Today weatherData={weatherData} />)

  const weatherMain = weatherData.forecast[0].weather
  const weatherForecast = weatherData.forecast[0]

  expect(getByTestId('todayDate').textContent).toBe(`Today, ${weatherForecast.weekday}`)
  expect(getByTestId("maxDegrees").textContent).toBe(
    `${Math.round(weatherForecast.temp.max)}°`
  );
  expect(getByTestId("minDegrees").textContent).toBe(
    `${Math.round(weatherForecast.temp.min)}°`
  );
  expect(getByTestId('weatherIcon').alt).toBe(weatherMain.description)
  expect(getByTestId('forecast').textContent).toBe(weatherMain.main)
})
})

