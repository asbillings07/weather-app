import { api } from './request'
import { buildApiUrl, buildGeoLocationUrl } from './config'

const ERROR = 'ERROR'
const GETCOMMENT = 'GETCOMMENT'
const CREATECOMMENT = 'CREATECOMMENT'
const DELETECOMMENTS = 'DELETECOMMENTS'
const GETALLCOMMENTS = 'GETALLCOMMENTS'
const LOADING = 'LOADING'
const TOGGLESUCCESS = 'TOGGLESUCCESS'

const routes = {
'GETCOMMENT': '/getComment',
'CREATECOMMENT': '/createComment',
'DELETECOMMENT': '/deleteComments',
'GETALLCOMMENTS': '/getComments'
}

const apiRoot = {

}

export const initialState = {
  weatherData: null,
  locationData: null,
  success: false,
  error: false,
  errorMessage: null,
  loading: true
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATECOMMENT:
      return {
        ...state,
        success: true,
        loading: false
      }
    case GETCOMMENT:
      return {
        ...state,
        comment: action.payload.comment,
        loading: false
      }
    case GETALLCOMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false
      }
    case DELETECOMMENTS:
      return {
        ...state,
        success: true,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case TOGGLESUCCESS:
      return {
        ...state,
        success: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

const errorMessage = 'ooops, looks like an error happened!'

export const fetchComments = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await api(routes.GETALLCOMMENTS)
    dispatch({ type: GETALLCOMMENTS, payload: { comments: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const fetchComment = (id) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await api(routes.GETCOMMENT)
    dispatch({ type: GETCOMMENT, payload: { comment: res.data } })
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const createComment = ({name, comment}) => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await api(routes.CREATECOMMENT, 'POST', { name, message: comment })
    dispatch({ type: CREATECOMMENT, payload: { comment: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(fetchComments()(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}

export const deleteComments = () => async (dispatch) => {
  dispatch({ type: LOADING })
  try {
    const res = await api(routes.DELETECOMMENT, 'DELETE')
    dispatch({ type: DELETECOMMENT, payload: { message: res.data } })
    dispatch({ type: TOGGLESUCCESS, payload: false })
    dispatch(fetchComments(dispatch))
  } catch (err) {
    dispatch({ type: ERROR, payload: { error: errorMessage } })
  }
}