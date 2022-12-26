import React from 'react'
import { useAppSelector } from '../hooks/redux'

function Indicators() {
  const { data } = useAppSelector((state) => state.weather)

  if (data.name != undefined) {
    return (
      <div className="bottom">
        <div className="feels">
          {data.main ? (
            <p className="bold">{Math.floor(data.main.feels_like)}°C</p>
          ) : null}
          <p>Ощущается</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          <p>Влажность</p>
        </div>
        <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed} м/с</p> : null}
          <p>Ветер</p>
        </div>
      </div>
    )
  }
}

export default Indicators
