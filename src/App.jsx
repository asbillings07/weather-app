import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { WeatherHome } from './pages/WeatherHome'
import { WeatherDetails } from './pages/WeatherDetail'

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={WeatherHome} />
        <Route path='/details/:id' component={WeatherDetails} />
      </Switch>
    </Router>
  )
}
