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
        <h1>-1°C</h1>
      </div>
      <div className="description">
        <p>Облачно</p>
      </div>
    </div>
  )
}

export default Location
