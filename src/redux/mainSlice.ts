import { createSlice } from "@reduxjs/toolkit";
import { ResponseData } from "../intefaces/trainCardInterface";


interface initialStateInterface {
  mainData: ResponseData,
  stepsIndex: number,
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
    trainListData?: ResponseData
  };
}

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    mainData: {
      total_count:0,
      items: [],
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
      //console.log(action.payload);
      state.mainData = action.payload
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

      if (dateInputDirection === 'from') {
        state.firstStep.searchData.dates.firstDate = date;
      } else {
        state.firstStep.searchData.dates.lastDate = date;
      }
    },
  },
});

export const { setMainData, setDepartureCity, changeDepartureCity, setDepartureDates } = mainSlice.actions;
export default mainSlice.reducer;
