import React from 'react'
import Location from './components/Location'
import Indicators from './components/Indicators'
import Input from './components/Input'

function App() {
  return (
    <div className="wrapped">
      <Input />
      <Location />
      <Indicators />
    </div>
  )
}

export default App
