import React from 'react'
import axios from 'axios'
import Location from './components/Location'
import Indicators from './components/Indicators'

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=2b573449087270184ae0fb5758061b01`

  return (
    <div className="app">
      <div className="container">
        <Location />
        <Indicators />
      </div>
    </div>
  )
}

export default App
