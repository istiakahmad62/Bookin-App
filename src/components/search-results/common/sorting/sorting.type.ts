import { RadioChangeEvent } from "antd";

export type SortingType = "default" | "asc" | "desc";

export type SortingProps = {
  feature: string;
  value: SortingType;
  onChangeOption: (e: RadioChangeEvent) => void;
};
