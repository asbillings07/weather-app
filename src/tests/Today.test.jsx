import { customRender } from '../setupTests'
import { describe, it, expect, vi } from 'vitest';
import { Today } from '../components/Today'
import { weatherData, location } from '../mocks/mockData'

  vi.mock("../Store", () => ({
    useStore: () => ({
      state: {
        weather: weatherData,
        location,
      },
    }),
  }));

describe('Today.jsx', () => {
it("shows Today's weather information with icon", () => {
  const { getByTestId } = customRender(<Today />)

  const weatherMain = weatherData.forecast[0].weather
  const weatherForecast = weatherData.forecast[0]

  expect(getByTestId("maxDegrees").textContent).toBe(
    `High: ${weatherForecast.temp.maxTemp}`
  );
  expect(getByTestId("minDegrees").textContent).toBe(`Low: ${weatherForecast.temp.minTemp}`);
  expect(getByTestId('weatherIcon').alt).toBe(weatherMain.description)
  expect(getByTestId('forecast').textContent).toBe(weatherMain.status)
})
})

