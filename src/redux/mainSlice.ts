import { createSlice } from "@reduxjs/toolkit";
import { ResponseData } from "../intefaces/trainCardInterface";
import { trainOptionsInterface } from "../intefaces/trainOptionsInterface";
import { filtersInterface } from "../intefaces/filtersInterface";

//   PayloadAction сделать типизацию

export interface initialStateInterface {
  mainData: ResponseData;
  stepsIndex: number;
  filters: filtersInterface;
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
    trainOptions: {
      currVagon: {
        name: string;
        vagonData: trainOptionsInterface;
      };
    };
    selectedPassengersCount: {
      adult: number;
      child: number;
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

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    mainData: {
      total_count: 0,
      items: [],
    },
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
      },
    },
    secondStep: {
      passengersData: [
        {
          passId: 1,
          age: "adult",
          document: "passport",
        },
        {
          passId: 2,
          age: "adult",
          document: "passport",
        },
        {
          passId: 3,
          age: "child",
          document: "childPassport",
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
    setMainData(state, action) {
      state.mainData = action.payload;
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

    // second step reducers
    updatePassengersData(state, action) {
      if (action.payload.actionType === "add") {
        state.secondStep.passengersData.push({
          age: "adult",
          passId: state.secondStep.passengersData.length,
        });
      }
      if (action.payload.actionType === "delete") {
        const indexToDelete = action.payload.id;

        state.secondStep.passengersData.splice(indexToDelete, 1);
      }
    },

    setPassengersData(state, action) {
      const { inputType, id, value } = action.payload;
      const currItem = state.secondStep.passengersData[id];

      switch (inputType) {
        case "docSeria":
          currItem.docSeria = value;
          break;
        case "docNumber":
          currItem.docNumber = value;
          break;
        case "document":
          currItem.document = value;
          break;
        case "birthday":
          currItem.birthday = value;
          break;
        case "gender":
          currItem.gender = value;
          break;
        case "surName":
          currItem.surName = value;
          break;
        case "familia":
          currItem.familia = value;
          break;
        case "name":
          currItem.name = value;
          break;
        default:
          break;
      }
    },

    // third step reducers
    setPaymentData(state, action) {
      const { inputType, value } = action.payload;

      switch (inputType) {
        case "name":
          state.thirdStep.name = value;
          break;
        case "familia":
          state.thirdStep.familia = value;
          break;
        case "surName":
          state.thirdStep.surName = value;
          break;
        case "tel":
          state.thirdStep.tel = value;
          break;
        case "method":
          state.thirdStep.method = value;
          break;
        case "email":
          state.thirdStep.email = value;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  setMainData,
  setCurrVagonData,
  setDepartureCity,
  changeDepartureCity,
  setDepartureDates,
  updatePassengersData,
  setPassengersData,
  setStepsIndex,
  setPaymentData,
} = mainSlice.actions;
export default mainSlice.reducer;
