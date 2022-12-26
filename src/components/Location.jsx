import React from 'react'
import { useAppSelector } from '../hooks/redux'

function Location() {
  const { data } = useAppSelector((state) => state.weather)

  return (
    <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        {data.main ? <h1>{Math.floor(data.main.temp)}°C</h1> : null}
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].description}</p> : null}
      </div>
    </div>
  )
}

export default Location
