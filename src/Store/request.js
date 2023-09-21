import axios from 'axios'

export const api = (url, method = 'GET', body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  if (body !== null) {
    options.data = body
  }

  return axios(url, options)
}
