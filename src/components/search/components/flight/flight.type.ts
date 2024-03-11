import { Dayjs } from "dayjs";
import { TravellerControlType } from "../common/travellers/travellers.type";

type FormValueType = {
  departureCity: string;
  arrivalCity: string;
  checkIn: Dayjs;
  checkOut: Dayjs;
};

export type FlightFormValueType = FormValueType & TravellerControlType;
