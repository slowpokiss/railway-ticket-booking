import { createSlice } from "@reduxjs/toolkit";
import { ResponseData, itemsInterface } from "../intefaces/trainCardInterface";
import { trainOptionsInterface } from "../intefaces/trainOptionsInterface";
import { filtersInterface } from "../intefaces/filtersInterface";
import { PayloadAction } from "@reduxjs/toolkit";
import queryString from "query-string";

export interface initialStateInterface {
  mainData: ResponseData;
  currTrainCardData: itemsInterface | undefined,
  urlQuery: string;
  stepsIndex: number;
  filters: filtersInterface;
  firstStep: {
    searchData: {
      dates: {
        firstDate: string | undefined;
        lastDate: string | undefined;
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
    trainOptions: {
      currVagon: {
        name: string;
        vagonData: trainOptionsInterface;
      };
      // selectedVagons: {}
    };
    selectedPassengersCount: {
      adult: number;
      child: number;
      baby: number;
    };
  };
  secondStep: {
    passengersData: {
      passId: number;
      age: string;

      name?: string;
      familia?: string;
      surName?: string;
      gender?: string;
      birthday?: string;
      disabled?: boolean;
      document?: string;
      docSeria?: string;
      docNumber?: string;
    }[];
  };
  thirdStep: {
    name: string | undefined;
    familia: string | undefined;
    surName: string | undefined;
    tel: string | undefined;
    method: string | undefined;
    email: string | undefined;
  };
}

interface SetSelectedPassengersCountPayload {
  type: "adult" | "child" | "baby";
  value: number;
}

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    mainData: {
      total_count: 0,
      items: [],
    },
    currTrainCardData: undefined,
    urlQuery: "",
    stepsIndex: 1,
    filters: {
      have_first_class: false,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: false,
      have_wifi: false,
      have_air_conditioning: false,
      have_express: false,
    },
    firstStep: {
      searchData: {
        dates: {
          firstDate: undefined,
          lastDate: undefined,
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
      trainOptions: {
        currVagon: {
          name: "",
          vagonData: {
            coach: {},
            seats: [],
          },
        },
      },
      selectedPassengersCount: {
        adult: 0,
        child: 0,
        baby: 0,
      },
    },
    secondStep: {
      passengersData: [
        {
          passId: 1,
          age: "adult",
          document: "passport",
          gender: "male",
        },
      ],
    },
    thirdStep: {
      name: undefined,
      familia: undefined,
      surName: undefined,
      tel: undefined,
      method: undefined,
      email: undefined,
    },
  } satisfies initialStateInterface as initialStateInterface,
  reducers: {
    setParamsToUrlQuery(state, action) {
      const currentParams = queryString.parse(state.urlQuery);
      const updatedParams = { ...currentParams, ...action.payload };
      state.urlQuery = queryString.stringify(updatedParams);
    },

    // from_city_id
    // to_city_id
    // date_start
    // date_end
    // date_start_arrival
    // date_end_arrival
    // have_first_class
    // have_second_class
    // have_third_class
    // have_fourth_class
    // have_wifi
    // have_air_conditioning
    // have_express
    // price_from
    // price_to
    // start_departure_hour_from
    // start_departure_hour_to
    // start_arrival_hour_from
    // start_arrival_hour_to
    // end_departure_hour_from
    // end_departure_hour_to
    // end_arrival_hour_from
    // end_arrival_hour_to
    // limit
    // offset
    // sort

    setMainData(state, action) {
      state.mainData = action.payload;
    },

    setCurrTrainCardData(state, action) {
      state.currTrainCardData = action.payload;
    },

    setStepsIndex(state, action) {
      const { index } = action.payload;
      state.stepsIndex = index;
    },

    // first step reducers
    setCurrVagonData(state, action) {
      const { name, data } = action.payload;

      state.firstStep.trainOptions.currVagon.name = name;
      state.firstStep.trainOptions.currVagon.vagonData = data;
    },

    setDepartureCity(state, action) {
      let { cityInputDirection, value, id } = action.payload;

      if (value.length === 1) {
        value = value.toUpperCase();
      }

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

    setSelectedPassengersCount(
      state,
      action: PayloadAction<SetSelectedPassengersCountPayload>
    ) {
      const { type, value } = action.payload;
      state.firstStep.selectedPassengersCount[type] = value;
    },

    // second step reducers
    updatePassengersData(state, action) {
      const { actionType, passengersAge } = action.payload;

      if (actionType === "add") {
        state.secondStep.passengersData.push({
          age: passengersAge,
          passId: state.secondStep.passengersData.length,
          document: passengersAge === "adult" ? "passport" : "childPassport",
        });
      }
      if (actionType === "delete") {
        const indexToDelete = action.payload.id;

        if (state.secondStep.passengersData.length > 1) {
          state.secondStep.passengersData.splice(indexToDelete, 1);
        }
      }
    },

    setPassengersData(
      state,
      action: {
        payload: {
          inputType:
            | "docSeria"
            | "docNumber"
            | "document"
            | "birthday"
            | "gender"
            | "surName"
            | "familia"
            | "name";
          id: number;
          value: string;
        };
      }
    ) {
      const { inputType, id, value } = action.payload;
      const currItem = state.secondStep.passengersData[id];
      
      if (inputType && currItem) {
        currItem[inputType] = value;
      }
    },

    // third step reducers
    setPaymentData(state, action: {
      payload: {
        inputType:
          | "method"
          | "tel"
          | "email"
          | "surName"
          | "familia"
          | "name";
        value: string;
      };
    }) {
      const { inputType, value } = action.payload;

      state.thirdStep[inputType] = value;
    },
  },
});

export const {
  setParamsToUrlQuery,
  setCurrTrainCardData,
  setMainData,
  setCurrVagonData,
  setDepartureCity,
  changeDepartureCity,
  setDepartureDates,
  setSelectedPassengersCount,
  updatePassengersData,
  setPassengersData,
  setStepsIndex,
  setPaymentData,
} = mainSlice.actions;
export default mainSlice.reducer;
