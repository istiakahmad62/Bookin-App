import { Dayjs } from "dayjs";
import { TravellerControlType } from "../common/travellers/travellers.type";

type FormValueType = {
  city: string;
  dates: [Dayjs, Dayjs];
};

export type HotelFormValueType = FormValueType & TravellerControlType;
