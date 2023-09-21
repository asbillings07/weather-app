import { useReducer } from 'react'

export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const thunkDispatch = (action) => {
    if (typeof action === 'function') {
      action(dispatch)
    } else {
      dispatch(action)
    }
  }

  return [state, thunkDispatch]
}