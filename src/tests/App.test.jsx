import { customRender } from '../setupTests'
import { describe, it, expect, vi } from 'vitest';
import { App } from '../App'
import { weatherData } from "../mocks/mockData";

vi.mock("../Store", () => ({
    useStore: () => ({
      state: {
        weather: weatherData
      },
    }),
  }));
describe('App', () => {
    const weatherForecast = weatherData.forecast[0];
  it('displays title of application', () => {
    const { getByTestId } = customRender(<App />)
    expect(getByTestId('appTitle').textContent).toBe('Sunshine')
    expect(getByTestId("todayDate").textContent).toBe(
        `Today, ${weatherForecast.month}`
      );
  })
})

