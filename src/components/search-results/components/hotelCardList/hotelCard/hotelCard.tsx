import styles from "./hotelCard.module.css";
import { Button } from "antd";
import { HotelCardProps } from "./hotelCard.type";
// import { getPriceValue } from "@/utils/getPriceValue";

export const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className={styles["card"]}>
      <img className={styles["image"]} src={hotel?.image} alt="card-image" />
      <div className={styles["content"]}>
        <div>
          <div className={styles["title"]}>{hotel?.name}</div>
          <div>
            <span></span>
            {/* icon */}
            <span className={styles["location"]}>{hotel?.location}</span>
          </div>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["rating-wrapper"]}>
            <span className={styles["rating"]}>{hotel?.rating}</span>
          </div>
          <div className={styles["price-wrapper"]}>
            <span className={styles["price"]}>BDT {hotel?.price}</span>
          </div>
          <Button size="small" type="primary">
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};
