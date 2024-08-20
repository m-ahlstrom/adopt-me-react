import { configureStore } from '@reduxjs/toolkit'
import adoptedPet from '../slices/adoptedPetSlice'
import searchParams from '../slices/searchParamsSlice'
// import { petApi } from '../../services/petAPIService'

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    //    [petApi.reducerPath]: petApi.reducer,
  },
  // This would allow Redux Toolkit to cache results.
  //  middleware: (getDefaultMiddleware) =>
  //    getDefaultMiddleware().concat(petApi.middleware),
})

export type IRootState = ReturnType<typeof store.getState>

export default store
