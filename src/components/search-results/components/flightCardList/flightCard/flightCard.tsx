import { Button } from "antd";
import { FlightCardProps } from "./flightCard.type";

export const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className={"card"}>
      <img className={"image"} src={flight?.image} alt="card-image" />
      <div className={"content"}>
        <div>
          <div className={"title"}>{flight?.airline}</div>
          <div>
            <span></span>
            <span className={"location"}>
              {flight?.departureCity} - {flight?.arrivalCity}
            </span>
          </div>
        </div>
        <div className={"content-right"}>
          <div className={"rating-wrapper"}>
            <span className={"rating"}>
              {flight?.arrivalTime} ~ {flight?.departureTime}
            </span>
          </div>
          <div className={"price-wrapper"}>
            <span className={"price"}>BDT {flight?.price}</span>
          </div>
          <Button size="large" type="primary" className={"button"}>
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};
