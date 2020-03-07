import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { WeatherHome } from './pages/WeatherHome'
// import { useStore } from './Store'
function App() {
  // const store = useStore()
  return (
    <Router>
      <NavBar title='Sunshine' />
      <Switch>
        <Route exact path='/' component={WeatherHome} />
      </Switch>
    </Router>
  )
}

export default App
