import React from 'react'
import { customRender } from './setupTests'
import App from './App'

test('renders learn react link', () => {
  const { debug } = customRender(<App />)
  debug()
})
