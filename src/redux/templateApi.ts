import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
  reducerPath: "templateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://students.netoservices.ru/fe-diplom/routes",
  }),
  endpoints: (build) => ({
    getCities: build.query({
      query: (searchItem) => `/cities?name=${searchItem}`,
    }),
    findTickets: build.query({
      query: ({ dates, cities }) => `?from_city_id=${cities.fromCity.id}&to_city_id=${cities.toCity.id}`,
    }),
  }),
});

export const { useLazyGetCitiesQuery, useLazyFindTicketsQuery } = templateApi;
export default templateApi;
