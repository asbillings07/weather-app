
import { customRender, cleanup } from '../setupTests'
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Forecast } from '../components/Forecast'
import { weatherData, location } from '../mocks/mockData'

vi.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: vi.fn()
  })
}))
  vi.mock("../Store", () => ({
    useStore: () => ({
      state: {
        weather: weatherData,
        location
      },
    }),
  }));

describe('Forecast.jsx', () => {
beforeEach(() => {
  cleanup()
})
it('should show 5 day weather forecast', () => {
  const { queryAllByTestId } = customRender(<Forecast weatherData={weatherData.forecast} />)

  expect(queryAllByTestId('weekDay')).toHaveLength(5)
  expect(queryAllByTestId('weatherStatus')).toHaveLength(5)
  expect(queryAllByTestId('weatherImage')).toHaveLength(5)
  expect(queryAllByTestId('maxTemp')).toHaveLength(5)
  expect(queryAllByTestId('minTemp')).toHaveLength(5)
})

it('Weather Data matches Json data', () => {
  const { queryAllByTestId } = customRender(<Forecast weatherData={weatherData.forecast} />)
  const weatherMain = weatherData.forecast[0]
  const weatherForecast = weatherData.forecast

  const weekDay1 = queryAllByTestId('weekDay')[0]
  const weekDay2 = queryAllByTestId('weekDay')[1]

  expect(weekDay1.textContent).toBe('Today')
  expect(weekDay2.textContent).toBe(weatherForecast[1].weekday); // shows day of the week

  expect(queryAllByTestId('weatherStatus').textContent).toBe(weatherMain.status)
  expect(queryAllByTestId('weatherImage').alt).toBe(weatherMain.description)

  weatherForecast.forEach((forecast, i) => {
      expect(queryAllByTestId("maxTemp")[i].textContent).toBe(
        `${forecast.temp.maxTemp}°`
      );
      expect(queryAllByTestId("minTemp")[i].textContent).toBe(
        `${forecast.temp.minTemp}°`
      );
  })

})

})
