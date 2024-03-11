import { Dayjs } from "dayjs";
import { TravellerControlType } from "../common/travellers/travellers.type";
import { Control, UseFormSetValue } from "react-hook-form";

type FormValueType = {
  departureCity: string;
  arrivalCity: string;
  checkIn: Dayjs;
  checkOut: Dayjs;
};

export type FlightFormValueType = FormValueType & TravellerControlType;

// export interface FlightStateType {
//   departureCity: string;
//   arrivalCity: string;
//   checkIn: string;
//   checkOut: string;
//   flight: {
//     adults: string;
//     children: string;
//   };
// }

export type FlightProps = {
  // flightControl: Control<FlightFormValueType>;
  // setFormValue: UseFormSetValue<FlightFormValueType>;
};
