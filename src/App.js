import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useStore } from './Store'
function App() {
  const store = useStore()
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{store.name}</p>
      </header>
    </div>
  )
}

export default App
