import { ServerResponse } from './../../model/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchCities: build.query<ServerResponse, string>({
      query: (search: string) => ({
        url: `weather`,
        params: {
          q: search,
          appid: '2b573449087270184ae0fb5758061b01',
          units: 'metric',
          lang: 'ru',
        },
      }),
    }),
  }),
})

export const { useSearchCitiesQuery } = weatherApi
