import axios from 'axios'

export const api = (url, cache = false, method = 'GET',  body = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  if (cache) {
    const cacheHeaders = {
      'Cache-Control': 'max-age=604800'
    }
    options.headers = {...options.headers, ...cacheHeaders}
  }

  if (body) {
    options.data = body
  }

  return axios(url, options)
}
