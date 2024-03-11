import { Control } from "react-hook-form";
import { HotelFormValueType } from "../../hotel/hotel.type";
import { FlightFormValueType } from "../../flight/flight.type";

type TravellersInfoType = {
  adults: string;
  children: string;
  rooms?: string;
};

export type TravellerControlType = {
  [key in "flight" | "hotel"]: TravellersInfoType;
};

export type TravellersProps = {
  isFlight?: boolean;
  forWhich: "hotel" | "flight";
  control: Control<HotelFormValueType | FlightFormValueType>;
  formValue: TravellersInfoType;
};
