import { customRender, cleanup } from '../setupTests'
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Detail } from '../components/Detail'
import { weatherData } from '../mocks/mockData'

let matchParam = 0;
  vi.mock("react-router-dom", () => ({
    useHistory: () => ({
      push: vi.fn(),
    }),
    useRouteMatch: () => ({
      params: {
        id: 0,
      },
    }),
  }));
  vi.mock("../Store", () => ({
    useStore: () => ({
      state: {
        weather: weatherData,
      },
    }),
  }));


describe('Detail.jsx', () => {
beforeEach(() => {
  cleanup()
  vi.clearAllMocks();
})



it('should show detail weather forecast elements', () => {
  vi.mock("react-router-dom", () => ({
    useHistory: () => ({
      push: vi.fn(),
    }),
    useRouteMatch: () => ({
      params: {
        id: 0,
      },
    }),
  }));
  const { getByTestId } = customRender(<Detail forecast={weatherData.forecast} />)

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

it('Detail Page matches Today weather Details', () => {
  vi.mock("react-router-dom", () => ({
    useHistory: () => ({
      push: vi.fn(),
    }),
    useRouteMatch: () => ({
      params: {
        id: 0,
      },
    }),
  }));

  const { getByTestId } = customRender(
    <Detail forecast={weatherData.forecast} />
  );
  const weatherMain = weatherData.forecast[1].weather
  const forecast = weatherData.forecast[1]

  expect(getByTestId('today').textContent).toBe('Tomorrows')
  expect(getByTestId("monthDate").textContent).toBe(forecast.month);
  expect(getByTestId('maxDegrees').textContent).toBe(`${forecast.temp.maxTemp}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${forecast.temp.minTemp}°`)
  expect(getByTestId('icon').alt).toBe(weatherMain.description)
  expect(getByTestId('status').textContent).toBe(weatherMain.status)
  expect(getByTestId('humidity').textContent).toBe(`Humidity: ${forecast.humidity}%`)
  expect(getByTestId('pressure').textContent).toBe(`Pressure: ${forecast.pressure} hPa`)
  expect(getByTestId('wind').textContent).toBe(`Wind: ${Math.round(forecast.speed)} km/h ${forecast.degrees}`)
})

it('Detail Page matches Tomorrow weather Details', () => {
  vi.mock("react-router-dom", () => ({
    useHistory: () => ({
      push: vi.fn(),
    }),
    useRouteMatch: () => ({
      params: {
        id: 1,
      },
    }),
  }));

  matchParam = 1;
  const { getByTestId } = customRender(
    <Detail forecast={weatherData.forecast} />
  );
  const weatherMain = weatherData.forecast[matchParam].weather
  const forecast = weatherData.forecast[matchParam]

  expect(getByTestId('today').textContent).toBe('Tomorrows')
  expect(getByTestId("monthDate").textContent).toBe(forecast.month);
  expect(getByTestId('maxDegrees').textContent).toBe(`${forecast.temp.maxTemp}°`)
  expect(getByTestId('minDegrees').textContent).toBe(`${forecast.temp.minTemp}°`)
  expect(getByTestId('icon').alt).toBe(weatherMain.description)
  expect(getByTestId('status').textContent).toBe(weatherMain.status)
  expect(getByTestId('humidity').textContent).toBe(`Humidity: ${forecast.humidity}%`)
  expect(getByTestId('pressure').textContent).toBe(`Pressure: ${forecast.pressure} hPa`)
  expect(getByTestId('wind').textContent).toBe(`Wind: ${Math.round(forecast.speed)} km/h ${forecast.degrees}`)
})
})

