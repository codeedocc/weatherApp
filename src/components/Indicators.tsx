import React from 'react'

function Indicators() {
  return (
    <div className="bottom">
      <div className="feels">
        <p className="bold">-4°C</p>
        <p>Ощущается как</p>
      </div>
      <div className="humidity">
        <p className="bold">87%</p>
        <p>Влажность</p>
      </div>
      <div className="wind">
        <p className="bold">3 м/с</p>
        <p>Скорость ветра</p>
      </div>
    </div>
  )
}

export default Indicators
