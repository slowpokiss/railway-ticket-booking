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
      query: ({ dates, cities }) =>
        `/?from_city_id=${cities.fromCity.id}&to_city_id=${cities.toCity.id}`,
    }),
    getTrainOptions: build.query({
      query: ({
        trainId,
        have_first_class = false,
        have_second_class = false,
        have_third_class = false,
        have_fourth_class = false,
        have_wifi = false,
        have_air_conditioning = false,
      }) =>
        `${trainId}/seats?
          have_first_class=${have_first_class}&
          have_second_class=${have_second_class}&
          have_third_class=${have_third_class}&
          have_fourth_class=${have_fourth_class}&
          have_wifi=${have_wifi}&
          have_air_conditioning=${have_air_conditioning}
      `,
    }),
  }),
});

export const {
  useLazyGetCitiesQuery,
  useLazyFindTicketsQuery,
  useLazyGetTrainOptionsQuery,
} = templateApi;
export default templateApi;
