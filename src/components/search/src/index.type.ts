import { RadioChangeEvent } from "antd";

export type SearchProps = {
  mode: string;
  onModeChange?: (event: RadioChangeEvent) => void;
};
