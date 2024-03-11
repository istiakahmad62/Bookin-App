import styles from "./flightCard.module.css";
import { Button } from "antd";
import { FlightCardProps } from "./flightCard.type";

export const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className={styles["card"]}>
      <img className={styles["image"]} src={flight?.image} alt="card-image" />
      <div className={styles["content"]}>
        <div>
          <div className={styles["title"]}>{flight?.airline}</div>
          <div>
            <span></span>
            <span className={styles["location"]}>
              {flight?.departureCity} - {flight?.arrivalCity}
            </span>
          </div>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["rating-wrapper"]}>
            <span className={styles["rating"]}>
              {flight?.arrivalTime} ~ {flight?.departureTime}
            </span>
          </div>
          <div className={styles["price-wrapper"]}>
            <span className={styles["price"]}>BDT {flight?.price}</span>
          </div>
          <Button size="large" type="primary">
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};
