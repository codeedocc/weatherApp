import React from 'react'
import { useAppSelector } from '../hooks/redux'

function Indicators() {
  const { data } = useAppSelector((state) => state.weather)

  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
        <p>Ощущается как</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        <p>Влажность</p>
      </div>
      <div className="wind">
        {data.wind ? <p className="bold">{data.wind.speed} м/с</p> : null}
        <p>Скорость ветра</p>
      </div>
    </div>
  )
}

export default Indicators
