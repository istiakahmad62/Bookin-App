import "./index.css";
import { HotelCardList } from "../components";
import { SearchResultProps } from "./index.type";
import { FlightCardList } from "../components/flightCardList";
import { Select } from "antd";

const filterOptions = [
  { label: "Default sorting", value: "" },
  { label: "Sort by price: low to high", value: "asc" },
  { label: "Sort by price: high to low", value: "desc" },
];

export const SearchResults = ({
  mode,
  filterOption,
  onChangeFilter,
}: SearchResultProps) => {
  return (
    <div className={"search-results"}>
      <div className={"filter-wrapper"}>
        <Select
          defaultValue={filterOption}
          options={filterOptions}
          className={"filter-box"}
          onChange={onChangeFilter}
        />
      </div>
      {mode === "hotel" && <HotelCardList />}
      {mode === "flight" && <FlightCardList />}
    </div>
  );
};
