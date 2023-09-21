export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return err
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    return err
  }
}

export const removeState = () => {
  try {
    window.localStorage.removeItem('state')
  } catch (err) {
    return err
  }
}
