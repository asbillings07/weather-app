import React from 'react'
import { customRender } from '../setupTests'
import { App } from '../App'

test('displays title of application', () => {
  const { getByTestId } = customRender(<App />)
  expect(getByTestId('appTitle').textContent).toBe('Sunshine')
})
