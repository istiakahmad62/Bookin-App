import { useState } from "react";
import { HotelCard } from "./hotelCard";
import styles from "./hotelCardList.module.css";
import { HotelCardType } from "./hotelCard/hotelCard.type";
import { SortingType } from "../../common";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const HotelCardList = () => {
  const { data } = useSelector(
    (state: RootState) => state.hotelData
  );

  return (
    <>
      <div className={styles["card-list"]}>
        {data &&
          data.map((res: HotelCardType) => (
            <HotelCard key={res?.id} hotel={res} />
          ))}
      </div>
    </>
  );
};
