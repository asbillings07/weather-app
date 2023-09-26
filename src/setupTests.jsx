import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Provider } from './Store/Context'
import { weatherData } from './mocks/mockData'
import { initialState } from './Store/reducers'
const state = {
  ...initialState,
  weather: weatherData
}


function customRender (ui, options) {
function Wrapper({ children }) {
  return <Provider value={state}>{children}</Provider>;
}
  return render(ui, { wrapper: Wrapper, ...options })
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender, cleanup }
