import styles from "./index.module.css";
import { HotelCardList } from "../components";
import { SearchResultProps } from "./index.type";
import { FlightCardList } from "../components/flightCardList";
import { Select } from "antd";

const filterOptions = [
  {label: "Default sorting", value: "default"},
  {label: "Sort by price: low to high", value: "asc"},
  {label: "Sort by price: high to low", value: "desc"},
]

export const SearchResults = ({ mode, filterOption,onChangeFilter }: SearchResultProps) => {
  return (
    <div
      className={`${styles["search-results"]} ${
        mode === "hotel" ? styles["hotel"] : styles["flight"]
      }`}
    >
      <div className={styles["filter-wrapper"]}>
        <Select defaultValue={filterOption} options={filterOptions} className={styles["filter-box"]} onChange={onChangeFilter} />
      </div>
      {mode === "hotel" && <HotelCardList />}
      {mode === "flight" && <FlightCardList />}
    </div>
  );
};
