import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import axios from 'axios'

function Input() {
  const { location, data } = useAppSelector((state) => state.weather)
  const { setLocation, setData } = useActions()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2b573449087270184ae0fb5758061b01&units=metric&lang=ru`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((responce) => {
        setData(responce.data)
        console.log(responce.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Введите название города..."
        onKeyPress={searchLocation}
        type={'text'}
      ></input>
    </div>
  )
}

export default Input
