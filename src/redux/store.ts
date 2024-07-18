import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import templateApi from "./templateApi";

export default configureStore({
  reducer: {
    [templateApi.reducerPath]: templateApi.reducer,
    main: mainSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(templateApi.middleware),
});
