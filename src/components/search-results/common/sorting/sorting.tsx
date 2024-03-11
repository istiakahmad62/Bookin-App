import { Radio } from "antd";
import styles from "./sorting.module.css";
import { SortingProps } from "./sorting.type";

export const Sorting = ({ feature, value, onChangeOption }: SortingProps) => {
  return (
    <div className={styles["feature"]}>
      <div className={styles["title"]}>By {feature}</div>
      <Radio.Group
        className={styles["sorting"]}
        name={feature.toLowerCase()}
        onChange={onChangeOption}
        value={value}
      >
        <Radio value={"default"}>Deafult</Radio>
        <Radio value={"asc"}>Low to High</Radio>
      </Radio.Group>
    </div>
  );
};
