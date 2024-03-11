import { configureStore } from "@reduxjs/toolkit";
import hotelDataReducer from "@/redux/features/hotelSlice";
import flightDataReducer from "@/redux/features/flightSlice";

export const store = configureStore({
  reducer: {
    hotelData: hotelDataReducer,
    flightData: flightDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
