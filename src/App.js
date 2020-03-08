import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { WeatherHome } from './pages/WeatherHome'
import { WeatherDetails } from './pages/WeatherDetail'
function App() {
  return (
    <Router>
      <NavBar title='Sunshine' />
      <Switch>
        <Route exact path='/' component={WeatherHome} />
        <Route path='/details/:id' component={WeatherDetails} />
      </Switch>
    </Router>
  )
}

export default App
