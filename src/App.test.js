import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from './Store'

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider>
      <App />
    </Provider>
  )
  const linkElement = getByText(/Aaron Billings/i)
  expect(linkElement).toBeInTheDocument()
})
