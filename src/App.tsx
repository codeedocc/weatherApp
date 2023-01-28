import React from 'react'
import Location from './components/Location'
import Indicators from './components/Indicators'
import Input from './components/Input'
import { useAppSelector } from './hooks/redux'
import { useDebounce } from './hooks/debounce'
import { useSearchCitiesQuery } from './store/weather/weather.api'

function App() {
  const { location } = useAppSelector((state) => state.weather)
  const debounced = useDebounce(location)

  const { data } = useSearchCitiesQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  return (
    <div
      className={`wrapped ${
        data?.name !== undefined && data.main.temp > 0 && 'warm'
      } ${data?.name !== undefined && data.main.temp < 0 && 'cold'} ${
        data?.name === undefined && 'default'
      }`}
    >
      <Input />
      <Location />
      <Indicators />
    </div>
  )
}

export default App
