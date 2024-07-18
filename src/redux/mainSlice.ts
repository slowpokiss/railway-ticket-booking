import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
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
  };
}

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    firstStep: {
      searchData: {
        dates: {
          firstDate: null,
          lastDate: null,
        },
        departureCities: {
          fromCity: {
            name: "",
            id: null,
          },
          toCity: {
            name: "",
            id: null,
          },
        },
      },
    },
  } satisfies initialStateInterface as initialStateInterface,
  reducers: {
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
      const prevStateToCity =
        state.firstStep.searchData.departureCities.toCity.name;
      const prevStateFromCity =
        state.firstStep.searchData.departureCities.fromCity.name;

      state.firstStep.searchData.departureCities.toCity.name =
        prevStateFromCity;
      state.firstStep.searchData.departureCities.fromCity.name =
        prevStateToCity;
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

export const { setDepartureCity, changeDepartureCity, setDepartureDates } = mainSlice.actions;
export default mainSlice.reducer;
