import { createSlice } from "@reduxjs/toolkit";

const initialFlightData = {
  data: [],
};

export const flightSlice = createSlice({
  name: "flightData",
  initialState: initialFlightData,
  reducers: {
    setFlightList: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFlightList } = flightSlice.actions;
export default flightSlice.reducer;
