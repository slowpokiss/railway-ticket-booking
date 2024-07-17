import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
  reducerPath: 'templateApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://students.netoservices.ru/fe-diplom/routes'}),
  endpoints: (build) => ({
    getCities: build.query({
      query: (searchItem) => `/cities?name=${searchItem}`,
    }),
    findTickets: build.query({
      //query: ({cityFrom, cityTo }) => `/cities?from_city_id=${cityFrom}&to_city_id=${cityTo}`,
      query: () => `?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa8f83e028786ea567b' `,
    }),
  })
});

export const { useLazyGetCitiesQuery, useLazyFindTicketsQuery } = templateApi
export default templateApi