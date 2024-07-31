import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const templateApi = createApi({
  reducerPath: "templateApi",
  tagTypes: ['Tickets', 'Options'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://students.netoservices.ru/fe-diplom/",
  }),
  endpoints: (build) => ({
    getCities: build.query({
      query: (searchItem) => `routes/cities?name=${searchItem}`,
    }),
    findTickets: build.query({
      query: ({ dates, cities }) =>
        `routes/?from_city_id=${cities.fromCity.id}&to_city_id=${cities.toCity.id}`,
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
        `routes/${trainId}/seats?
          have_first_class=${have_first_class}&
          have_second_class=${have_second_class}&
          have_third_class=${have_third_class}&
          have_fourth_class=${have_fourth_class}&
          have_wifi=${have_wifi}&
          have_air_conditioning=${have_air_conditioning}
      `,
    }),
    getLastRoutes: build.query({
      query: () => `routes/last`,
    }),
    emailSubscription: build.mutation({
      query: (body: any) => ({
        url: 'subscribe',
        method: 'POST',
        body,
    }),

    // getLastRoutes: build.query({
    //   query: (searchItem) => `routes/cities?name=${searchItem}`
    // }),
    
      //invalidatesTags: [{ type: 'Tickets', id: 'LIST' }],
      // providesTags: (result: any) =>
      //   result
      //     ? [
      //         { type: 'Tickets', id: 'LIST' },
      //         ...result.map(({ id }) => ({ type: 'Tickets' as const, id })),
      //       ]
      //     : [{ type: 'Tickets', id: 'LIST' }],
        
        //`/?from_city_id=${cities.fromCity.id}&to_city_id=${cities.toCity.id}`,
    }),
  }),
});

export const {
  useLazyGetCitiesQuery,
  useLazyFindTicketsQuery,
  useLazyGetTrainOptionsQuery,
  useGetLastRoutesQuery,
  useEmailSubscriptionMutation,
} = templateApi;
export default templateApi;
