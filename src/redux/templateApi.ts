import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
  reducerPath: 'templateApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://students.netoservices.ru/fe-diplom'}),
  endpoints: (build) => ({
    getCities: build.query({
      query: (searchItem) => `routes/cities?name=${searchItem}`,
    }),
  })
});

export const { useLazyGetCitiesQuery } = templateApi
export default templateApi