import { createSlice } from "@reduxjs/toolkit";

interface FlightStateType {
  departureCity: string;
  arrivalCity: string;
  checkIn: string;
  checkOut: string;
  flight: {
    adults: string;
    children: string;
  };
}

const initialFlightState: FlightStateType = {
  departureCity: "",
  arrivalCity: "",
  checkIn: "",
  checkOut: "",
  flight: {
    adults: "",
    children: "",
  },
};

const initialFlightData = {
  loading: false,
  data: [],
  error: null,
};

export const flightSlice = createSlice({
  name: "flightData",
  initialState: initialFlightData,
  reducers: {
    // setFlightForm: (state, action) => {
    //   state.departureCity = action.payload?.departureCity;
    //   state.arrivalCity = action.payload?.arrivalCity;
    //   state.checkIn = action.payload?.checkIn;
    //   state.checkOut = action.payload?.checkOut;
    //   state.flight = { ...action.payload?.flight };
    // },
    setFlightList: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFlightList, setLoading, setError } = flightSlice.actions;
export default flightSlice.reducer;
