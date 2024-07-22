import { createSlice } from "@reduxjs/toolkit";
import { ResponseData } from "../intefaces/trainCardInterface";
import { trainOptionsInterface } from "../intefaces/trainOptionsInterface";


//   PayloadAction сделать типизацию
interface initialStateInterface {
  mainData: ResponseData;
  stepsIndex: number;
  filters: {
    have_first_class: boolean;
    have_second_class: boolean;
    have_third_class: boolean;
    have_fourth_class: boolean;
    have_wifi: boolean;
    have_air_conditioning: boolean;
    have_express: boolean;
  }
  firstStep: {
    searchData: {
      dates: {
        firstDate: string | null;
        lastDate: string | null;
      };
      departureCities: {
        fromCity: {
          name: string;
          id: string | null;
        };
        toCity: {
          name: string;
          id: string | null;
        };
      };
    };
    trainListData?: ResponseData;
  };
}

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    mainData: {
      total_count: 0,
      items: [],
    },
    filters: {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      have_express: false,
    },
    stepsIndex: 1,
    firstStep: {
      searchData: {
        dates: {
          firstDate: null,
          lastDate: null,
        },
        departureCities: {
          fromCity: {
            name: "москва",
            id: null,
          },
          toCity: {
            name: "санкт-петербург",
            id: null,
          },
        },
      },
    },
  } satisfies initialStateInterface as initialStateInterface,
  reducers: {
    setMainData(state, action) {
      state.mainData = action.payload;
    },

    setDepartureCity(state, action) {
      const { cityInputDirection, value, id } = action.payload;

      if (cityInputDirection === "toCity") {
        state.firstStep.searchData.departureCities.toCity.name = value;
        state.firstStep.searchData.departureCities.toCity.id = id;
      } else {
        state.firstStep.searchData.departureCities.fromCity.name = value;
        state.firstStep.searchData.departureCities.fromCity.id = id;
      }
    },

    changeDepartureCity(state) {
      const prevStateToCityName =
        state.firstStep.searchData.departureCities.toCity.name;
      const prevStateFromCityName =
        state.firstStep.searchData.departureCities.fromCity.name;

      const prevStateToCityId =
        state.firstStep.searchData.departureCities.toCity.id;
      const prevStateFromCityId =
        state.firstStep.searchData.departureCities.fromCity.id;

      state.firstStep.searchData.departureCities.toCity.name =
        prevStateFromCityName;
      state.firstStep.searchData.departureCities.fromCity.name =
        prevStateToCityName;

      state.firstStep.searchData.departureCities.fromCity.id =
        prevStateToCityId;
      state.firstStep.searchData.departureCities.toCity.id =
        prevStateFromCityId;
    },

    setDepartureDates(state, action) {
      const { dateInputDirection, date } = action.payload;

      if (dateInputDirection === "from") {
        state.firstStep.searchData.dates.firstDate = date;
      } else {
        state.firstStep.searchData.dates.lastDate = date;
      }
    },
  },
});

export const {
  setMainData,
  setDepartureCity,
  changeDepartureCity,
  setDepartureDates,
} = mainSlice.actions;
export default mainSlice.reducer;
