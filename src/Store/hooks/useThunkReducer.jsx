import { useReducer } from 'react'

const runDebug = (debug, action, state) => {
  const data = {
    type: action.type,
    payload: action.payload,
    updatedState: state
  };

  if (debug) {
    console.log(`%c${JSON.stringify(data)}`, "color:orange")
  }
}

export const useThunkReducer = (reducer, initialState, debug = false) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const thunkDispatch = (action) => {
    if (typeof action === 'function') {
      action(dispatch)
    } else {
      dispatch(action)
      runDebug(debug, action, state);
    }
  }

  return [state, thunkDispatch]
}