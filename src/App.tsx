import React from 'react'
import Location from './components/Location'
import Indicators from './components/Indicators'
import Input from './components/Input'

function App() {
  return (
    <div className="app">
      <Input />
      <div className="container">
        <Location />
        <Indicators />
      </div>
    </div>
  )
}

export default App
