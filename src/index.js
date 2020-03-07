import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from './Store'
import * as serviceWorker from './serviceWorker'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#03A9FA',
      main: '#03A9FA',
      dark: '#1a237e',
      contrastText: '#fff'
    },
    secondary: {
      light: '#fdd835',
      main: '#646464',
      dark: '#ff8f00',
      contrastText: '#000'
    },
    common: { black: '#000', white: '#fff' },
    grey: { light: '#f5f5f5', main: '#e3e3e3' }
  }
})

ReactDOM.render(
  <Provider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
