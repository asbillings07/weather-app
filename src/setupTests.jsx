import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Provider } from './Store'


function customRender (ui, options) {
  function Wrapper (props) {
    return <Provider {...props} />
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

export { customRender, cleanup }
