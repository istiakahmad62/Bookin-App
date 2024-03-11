import { useState } from "react";
import { FlightCard } from "./flightCard";
import styles from "./flightCardList.module.css";
import { FlightCardType } from "./flightCard/flightCard.type";
import { SortingType } from "../../common";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const FlightCardList = () => {
  const [option, setOption] = useState<SortingType>("default");
  const { loading, data, error } = useSelector(
    (state: RootState) => state.flightData
  );

  // const onChangeOption = (e: RadioChangeEvent) => {
  //   setOption(e.target.value);
  //   // refetch();
  // };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h3>{error?.message}</h3>;

  return (
    <>
      <div className={styles["sorting-wrapper"]}>
        <div className={styles["wrapper-heading"]}>Filtering</div>
        <div className={styles["wrapper-content"]}>
          {/* <Sorting
              feature="Price"
              value={option}
              onChangeOption={onChangeOption}
            /> */}
        </div>
      </div>
      <div className={styles["card-list"]}>
        {data &&
          data.map((res: FlightCardType) => (
            <FlightCard key={res?.id} flight={res} />
          ))}
      </div>
    </>
  );
};
