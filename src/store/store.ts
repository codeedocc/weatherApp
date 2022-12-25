import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { weatherSlice } from './slice'

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
