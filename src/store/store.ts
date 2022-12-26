import { weatherApi } from './weather/weather.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from './weather/weather.slice'

const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  weather: weatherSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
