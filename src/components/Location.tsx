import React from 'react'
import { useDebounce } from '../hooks/debounce'
import { useAppSelector } from '../hooks/redux'
import { useSearchCitiesQuery } from '../store/weather/weather.api'

function Location() {
  const { location } = useAppSelector((state) => state.weather)
  const debounced = useDebounce(location)

  const { isLoading, isError, data } = useSearchCitiesQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  return (
    <div className="top">
      <div className="location">
        {isLoading && <p>Загрузка...</p>}
        {isError ? (
          <p>Вы точно ввели правильную локацию?</p>
        ) : (
          <p>{data?.name}</p>
        )}
      </div>
      <div className="temp">
        {isError ? null : data?.main ? (
          <h1>{Math.floor(data.main.temp)}°C</h1>
        ) : null}
      </div>
      <div className="description">
        {isError ? null : data?.weather ? (
          <p>{data.weather[0].description}</p>
        ) : null}
      </div>
    </div>
  )
}

export default Location
