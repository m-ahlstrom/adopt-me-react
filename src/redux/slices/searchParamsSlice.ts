import { createSlice } from '@reduxjs/toolkit'
import { Animal } from '../../APIResponseTypes'

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: {
    value: {
      location: '' as string,
      animal: '' as Animal,
      breed: '' as string,
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { all } = searchParamsSlice.actions
export default searchParamsSlice.reducer
