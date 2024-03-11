import { Radio } from "antd";

import "./index.css";
import { Hotel, Flight } from "../components";
import { SearchProps } from "./index.type";

export const Seacrh = ({ mode, onModeChange }: SearchProps) => {
  return (
    <>
      <Radio.Group onChange={onModeChange} value={mode} className="mode">
        <Radio value="hotel">Hotel</Radio>
        <Radio value="flight">Flight</Radio>
      </Radio.Group>
      {mode === "hotel" ? <Hotel /> : mode === "flight" ? <Flight /> : null}
    </>
  );
};
