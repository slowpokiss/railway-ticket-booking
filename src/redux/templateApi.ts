import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface finalOrderInterface {
  user: {
    first_name: "string";
    last_name: "string";
    patronymic: "string";
    phone: "string";
    email: "string";
    payment_method: "cash";
  };
  departure: {
    route_direction_id: "string";
    seats: [
      {
        coach_id: "string";
        person_info: {
          is_adult: true;
          first_name: "string";
          last_name: "string";
          patronymic: "string";
          gender: true;
          birthday: "string";
          document_type: "string";
          document_data: "string";
        };
        seat_number: 0;
        is_child: true;
        include_children_seat: true;
      }
    ];
  };
  arrival: {
    route_direction_id: "string";
    seats: [
      {
        coach_id: "string";
        person_info: {
          is_adult: true;
          first_name: "string";
          last_name: "string";
          patronymic: "string";
          gender: true;
          birthday: "string";
          document_type: "string";
          document_data: "string";
        };
        seat_number: 0;
        is_child: true;
        include_children_seat: true;
      }
    ];
  };
}

export const templateApi = createApi({
  reducerPath: "templateApi",
  tagTypes: ["Tickets", "Options"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://students.netoservices.ru/fe-diplom/",
  }),
  endpoints: (build) => ({
    getCities: build.query({
      query: (searchItem) => `routes/cities?name=${searchItem}`,
    }),
    findTicketsWithOptions: build.query({
      query: ({ urlQuery, dates, cities }) =>
        `routes/?from_city_id=${cities.fromCity.id}&to_city_id=${
          cities.toCity.id
        }&${
          dates
            ? `${
                dates.firstDate !== undefined
                  ? `date_start=${dates.firstDate}`
                  : ""
              }
              ${
                dates.lastDate !== undefined
                  ? `&date_end=${dates.lastDate}`
                  : ""
              }`
            : ""
        }&${urlQuery}`,
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
      query: (body: object) => ({
        url: "subscribe",
        method: "POST",
        body,
      }),
    }),
    finalOrder: build.mutation({
      query: (body: finalOrderInterface) => ({
        url: "order",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetCitiesQuery,
  useLazyFindTicketsWithOptionsQuery,
  useLazyGetTrainOptionsQuery,
  useGetLastRoutesQuery,
  useEmailSubscriptionMutation,
  useFinalOrderMutation,
} = templateApi;
export default templateApi;
