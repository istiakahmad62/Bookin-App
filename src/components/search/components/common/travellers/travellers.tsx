import { Form, Select } from "antd";
import styles from "./travellers.module.css";
import { TravellersProps } from "./travellers.type";
import { Controller } from "react-hook-form";

export const Travellers = ({
  isFlight,
  forWhich,
  control,
  formValue,
}: TravellersProps) => {
  return (
    <div
      className={`${styles["travellers"]} ${
        isFlight ? styles["travellers-flight"] : ""
      }`}
    >
      <Form.Item name={`${forWhich}.adults`}>
        <Controller
          name={`${forWhich}.adults`}
          control={control}
          rules={{ required: "Required" }}
          render={({ field, fieldState }) => (
            <>
              <Select
                size="large"
                placeholder="Adults"
                style={{ minWidth: "90px" }}
                options={Array.from({ length: 30 }, (_, idx) => ({
                  label: `${idx + 1}`,
                  value: `${idx + 1}`,
                }))}
                defaultValue={formValue?.adults}
                {...field}
              />
              <span className="danger-text">{fieldState?.error?.message}</span>
            </>
          )}
        />
      </Form.Item>
      <Form.Item name={`${forWhich}.children`}>
        <Controller
          name={`${forWhich}.children`}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Select
                size="large"
                placeholder="Children"
                style={{ minWidth: "110px" }}
                options={Array.from({ length: 10 }, (_, idx) => ({
                  label: `${idx + 1}`,
                  value: `${idx + 1}`,
                }))}
                defaultValue={formValue?.children}
                {...field}
              />
              <span className="danger-text">{fieldState?.error?.message}</span>
            </>
          )}
        />
      </Form.Item>
      {!isFlight && (
        <Form.Item name={"hotel.rooms"}>
          <Controller
            name={"hotel.rooms"}
            control={control}
            rules={{ required: "Required" }}
            render={({ field, fieldState }) => (
              <>
                <Select
                  size="large"
                  placeholder="Rooms"
                  style={{ minWidth: "90px" }}
                  options={Array.from({ length: 30 }, (_, idx) => ({
                    label: `${idx + 1}`,
                    value: `${idx + 1}`,
                  }))}
                  defaultValue={formValue?.rooms}
                  {...field}
                />
                <span className="danger-text">
                  {fieldState?.error?.message}
                </span>
              </>
            )}
          />
        </Form.Item>
      )}
    </div>
  );
};
