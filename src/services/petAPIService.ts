// This file is not used. This would help replace React Query with Redux. I just didn't care enough to actually implement it.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BreedListAPIResponse, PetAPIResponse } from '../APIResponseTypes'

export const petApi = createApi({
  reducerPath: 'petApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://pets-v2.dev-apis.com' }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: (animal) => ({ url: 'breeds', params: { animal } }),
      transformResponse: (response: BreedListAPIResponse) => response.breeds,
    }),
    getPet: builder.query({
      query: (id) => ({ url: 'pets', params: { id } }),
      transformResponse: (response: PetAPIResponse) => response.pets[0],
    }),
    search: builder.query({
      query: ({ animal, location, breed }) => ({
        url: 'pets',
        params: { animal, location, breed },
      }),
      transformResponse: (response: PetAPIResponse) => response.pets,
    }),
  }),
})

export const { useGetBreedsQuery, useGetPetQuery, useSearchQuery } = petApi
