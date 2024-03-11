import { Button } from "antd";
import { HotelCardProps } from "./hotelCard.type";

export const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className={"card"}>
      <img className={"image"} src={hotel?.image} alt="card-image" />
      <div className={"content"}>
        <div>
          <div className={"title"}>{hotel?.name}</div>
          <div>
            <span></span>
            {/* icon */}
            <span className={"location"}>{hotel?.location}</span>
          </div>
        </div>
        <div className={"content-right"}>
          <div className={"rating-wrapper"}>
            <span className={"rating"}>{hotel?.rating}</span>
          </div>
          <div className={"price-wrapper"}>
            <span className={"price"}>BDT {hotel?.price}</span>
          </div>
          <Button size="large" type="primary" className={"button"}>
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};
