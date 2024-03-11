import { FlightCard } from "./flightCard";
import { FlightCardType } from "./flightCard/flightCard.type";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const FlightCardList = () => {
  const { data } = useSelector((state: RootState) => state.flightData);

  return (
    <>
      <div className={"card-list"}>
        {data &&
          data.map((res: FlightCardType) => (
            <FlightCard key={res?.id} flight={res} />
          ))}
      </div>
    </>
  );
};
