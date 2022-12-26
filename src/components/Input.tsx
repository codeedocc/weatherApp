import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'

function Input() {
  const { location } = useAppSelector((state) => state.weather)
  const { setLocation } = useActions()

  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Напиши локацию..."
        type={'text'}
      ></input>
    </div>
  )
}

export default Input
