import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from './Store/Context'
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const colors = {
  yellow: "#fdd835",
  blue: "#03A9FA",
  darkBlue: "#1a237e",
  white: "#fff",
  grey: "#646464",
  orange: "#ff8f00",
  black: "#000",
  lightGrey: "#f5f5f5",
  lightGrey2: "#e3e3e3",
};

const theme = createTheme({
  palette: {
    primary: {
      light: colors.blue,
      main: colors.blue,
      dark: colors.darkBlue,
      contrastText: colors.white
    },
    secondary: {
      light: colors.yellow,
      main: colors.grey,
      dark: colors.orange,
      contrastText: colors.black
    },
    common: { black: colors.black, white: colors.white },
    grey: { light: colors.lightGrey, main: colors.lightGrey2 }
  }
})

// this function is here to ensure the main app
// loads after a user puts in the correct passphrase
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
