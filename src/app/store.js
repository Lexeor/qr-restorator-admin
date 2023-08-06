import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantSlice";

const store = configureStore({
  reducer: {
    restaurantReducer,
  },
});

export default store;
