import React, { KeyboardEvent } from 'react'
import axios from 'axios'
import Location from './components/Location'
import Indicators from './components/Indicators'
import { useAppSelector } from './hooks/redux'
import { useActions } from './hooks/actions'

function App() {
  const { location, data } = useAppSelector((state) => state.weather)
  const { setLocation, setData } = useActions()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2b573449087270184ae0fb5758061b01&units=metric`

  const searchLocation = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      axios.get(url).then((responce) => {
        setData(responce.data)
        console.log(responce.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Введите название города..."
          onKeyPress={searchLocation}
          type={'text'}
        ></input>
      </div>
      <div className="container">
        <Location />
        <Indicators />
      </div>
    </div>
  )
}

export default App
