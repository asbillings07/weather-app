import { customRender } from '../setupTests'
import { describe, it, expect } from 'vitest';
import { App } from '../App'

describe('App', () => {
  it('displays title of application', () => {
    const { getByTestId } = customRender(<App />)
    expect(getByTestId('appTitle').textContent).toBe('Sunshine')
  })
})

