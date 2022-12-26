import React from 'react'
import { useDebounce } from '../hooks/debounce'
import { useAppSelector } from '../hooks/redux'
import { useSearchCitiesQuery } from '../store/weather/weather.api'

function Indicators() {
  const { location } = useAppSelector((state) => state.weather)
  const debounced = useDebounce(location)

  const { isError, data } = useSearchCitiesQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  return (
    <>
      {data?.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {isError ? null : data?.main ? (
              <p className="bold">{Math.floor(data.main.feels_like)}°C</p>
            ) : null}
            {!isError ? <p>Ощущается</p> : null}
          </div>
          <div className="humidity">
            {isError ? null : data?.main ? (
              <p className="bold">{data.main.humidity}%</p>
            ) : null}
            {!isError ? <p>Влажность</p> : null}
          </div>
          <div className="wind">
            {isError ? null : data?.wind ? (
              <p className="bold">{data.wind.speed} м/с</p>
            ) : null}
            {!isError ? <p>Ветер</p> : null}
          </div>
        </div>
      )}
    </>
  )
}

export default Indicators
