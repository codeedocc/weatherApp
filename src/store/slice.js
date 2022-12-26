import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
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

export const weatherActions = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer
