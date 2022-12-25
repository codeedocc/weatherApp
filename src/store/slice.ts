import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  data: {}
  location: string
}

const initialState: IInitialState = {
  data: 0,
  location: '',
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
  },
})

export const quizActions = weatherSlice.actions
export const quizReducer = weatherSlice.reducer
