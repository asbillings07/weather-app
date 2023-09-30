export const loadState = (key) => {
  try {
    const serializedState = window.localStorage.getItem(key)
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return err
  }
}

export const saveState = (key, data) => {
  try {
    const serializedState = JSON.stringify(data)
    window.localStorage.setItem(key, serializedState)
  } catch (err) {
    return err
  }
}

export const removeState = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch (err) {
    return err
  }
}
