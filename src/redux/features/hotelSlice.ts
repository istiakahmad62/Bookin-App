import { createSlice } from "@reduxjs/toolkit";

const initialHotelData = {
  data: [],
};

export const hotelSlice = createSlice({
  name: "hotelData",
  initialState: initialHotelData,
  reducers: {
    setHotelList: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setHotelList } = hotelSlice.actions;
export default hotelSlice.reducer;
