import React from 'react'
import { customRender } from '../setupTests'
import { App } from '../App'

test('renders learn react link', () => {
  const { getByTestId } = customRender(<App />)
  expect(getByTestId('appTitle').textContent).toBe('Sunshine')
})
