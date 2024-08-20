import { createSlice } from '@reduxjs/toolkit'
import { Pet } from '../../APIResponseTypes'

const adoptedPetSlice = createSlice({
  name: 'adoptedPet',
  initialState: {
    value: null as null | Pet,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload
    },
  },
})

// The action creator function basically does something like this:
// function adopt (pet) {
//     return { type: "adopt", payload: pet }
// }

export const { adopt } = adoptedPetSlice.actions
export default adoptedPetSlice.reducer
