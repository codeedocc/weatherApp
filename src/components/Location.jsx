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
        {data.main ? <h1>{data.main.temp}°</h1> : null}
      </div>
      <div className="description">
        <p>Облачно</p>
      </div>
    </div>
  )
}

export default Location
