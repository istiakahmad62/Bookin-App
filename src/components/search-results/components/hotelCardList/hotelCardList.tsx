import { HotelCard } from "./hotelCard";
import { HotelCardType } from "./hotelCard/hotelCard.type";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const HotelCardList = () => {
  const { data } = useSelector((state: RootState) => state.hotelData);

  return (
    <>
      <div className={"card-list"}>
        {data &&
          data.map((res: HotelCardType) => (
            <HotelCard key={res?.id} hotel={res} />
          ))}
      </div>
    </>
  );
};
