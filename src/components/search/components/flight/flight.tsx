import { Controller, useForm } from "react-hook-form";
import { Input, DatePicker, Form, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import styles from "./flight.module.css";
import { Travellers } from "../common";
import { FlightFormValueType } from "./flight.type";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import {
  setFlightList,
  setLoading,
  setError,
} from "@/redux/features/flightSlice";
import axios from "axios";
import { useQuery } from "react-query";

const today = dayjs();

const fetchFlightList = async (departureCity: string) => {
  const response = await axios.get("http://localhost:4000/flights", {
    params: {
      departureCity: departureCity?.toLowerCase(),
    },
  });
  return response.data;
};

export const Flight = () => {
  const { control, handleSubmit, setValue, getValues } =
    useForm<FlightFormValueType>();
  const dispatch = useDispatch<AppDispatch>();

  const { refetch } = useQuery(
    "flightListData",
    () => fetchFlightList(getValues("departureCity")),
    {
      enabled: false,
      onSuccess: (flightData) => {
        console.log(flightData);
        dispatch(setFlightList(flightData));
        dispatch(setLoading(false));
        dispatch(setError(null));
      },
      onError: (error) => {
        dispatch(setLoading(false));
        dispatch(setError(error));
      },
    }
  );

  useEffect(() => {
    try {
      const { data, mode } = JSON.parse(
        localStorage.getItem("searchQuery") || ""
      );

      if (!!data) {
        Object.entries(data).forEach(([key, value]) => {
          if (value !== undefined) {
            if (key === "checkIn" || key === "checkOut") {
              setValue(key, dayjs(value));
            } else {
              setValue(key, value);
            }
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onSubmitHandler = handleSubmit((data) => {
    const query = {
      ...data,
      checkIn: data?.checkIn?.toISOString(),
      checkOut: data?.checkOut?.toISOString(),
    };

    refetch();

    localStorage.setItem(
      "searchQuery",
      JSON.stringify({ mode: "flight", data: query })
    );
  });

  return (
    <Form
      name="flight-search-form"
      onFinish={onSubmitHandler}
      className={`${styles["search"]}`}
    >
      <div className={styles["destination"]}>
        <Form.Item name="departureCity">
          <Controller
            name="departureCity"
            control={control}
            rules={{ required: "Please enter departure city" }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  placeholder="Departure City"
                  suffix={
                    <span className={styles["icon"]}>
                      <svg
                        viewBox="0 0 200 200"
                        width="14px"
                        height="14px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Tn7z-icon Tn7z-prefix-icon"
                        role="img"
                      >
                        <path d="M178.081 41.973c-2.681 2.663-16.065 17.416-28.956 30.221c0 107.916 3.558 99.815-14.555 117.807l-14.358-60.402l-14.67-14.572c-38.873 38.606-33.015 8.711-33.015 45.669c.037 8.071-3.373 13.38-8.263 18.237L50.66 148.39l-30.751-13.513c10.094-10.017 15.609-8.207 39.488-8.207c8.127-16.666 18.173-23.81 26.033-31.62L70.79 80.509L10 66.269c17.153-17.039 6.638-13.895 118.396-13.895c12.96-12.873 26.882-27.703 29.574-30.377c7.745-7.692 28.017-14.357 31.205-11.191c3.187 3.166-3.349 23.474-11.094 31.167zm-13.674 42.469l-8.099 8.027v23.58c17.508-17.55 21.963-17.767 8.099-31.607zm-48.125-47.923c-13.678-13.652-12.642-10.828-32.152 8.57h23.625l8.527-8.57z"></path>
                      </svg>
                    </span>
                  }
                  size="large"
                  {...field}
                />
                <span className="danger-text">
                  {fieldState?.error?.message}
                </span>
              </>
            )}
          />
        </Form.Item>
        <Form.Item name="arrivalCity">
          <Controller
            name="arrivalCity"
            control={control}
            rules={{ required: "Please enter arrival city" }}
            render={({ field, fieldState }) => (
              <>
                <Input
                  placeholder="Arrival City"
                  suffix={
                    <span className={styles["icon"]}>
                      <svg
                        viewBox="0 0 200 200"
                        width="14px"
                        height="14px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Tn7z-icon Tn7z-prefix-icon"
                        role="img"
                      >
                        <path d="M178.081 41.973c-2.681 2.663-16.065 17.416-28.956 30.221c0 107.916 3.558 99.815-14.555 117.807l-14.358-60.402l-14.67-14.572c-38.873 38.606-33.015 8.711-33.015 45.669c.037 8.071-3.373 13.38-8.263 18.237L50.66 148.39l-30.751-13.513c10.094-10.017 15.609-8.207 39.488-8.207c8.127-16.666 18.173-23.81 26.033-31.62L70.79 80.509L10 66.269c17.153-17.039 6.638-13.895 118.396-13.895c12.96-12.873 26.882-27.703 29.574-30.377c7.745-7.692 28.017-14.357 31.205-11.191c3.187 3.166-3.349 23.474-11.094 31.167zm-13.674 42.469l-8.099 8.027v23.58c17.508-17.55 21.963-17.767 8.099-31.607zm-48.125-47.923c-13.678-13.652-12.642-10.828-32.152 8.57h23.625l8.527-8.57z"></path>
                      </svg>
                    </span>
                  }
                  size="large"
                  {...field}
                />
                <span className="danger-text">
                  {fieldState?.error?.message}
                </span>
              </>
            )}
          />
        </Form.Item>
      </div>
      <div className={styles["date-picker"]}>
        <Form.Item name="checkIn">
          <Controller
            name="checkIn"
            control={control}
            rules={{ required: "Please enter check-in" }}
            render={({ field, fieldState }) => (
              <>
                <DatePicker
                  minDate={today}
                  placeholder={"Departure Date"}
                  className={styles["calendar"]}
                  suffixIcon={<CalendarOutlined style={{ fontSize: "14px" }} />}
                  size="large"
                  {...field}
                />
                <span className="danger-text">
                  {fieldState?.error?.message}
                </span>
              </>
            )}
          />
        </Form.Item>
        <Form.Item name="checkOut">
          <Controller
            name="checkOut"
            control={control}
            rules={{ required: "Please enter check-out" }}
            render={({ field, fieldState }) => (
              <>
                <DatePicker
                  minDate={today}
                  placeholder={"Return Date"}
                  className={styles["calendar"]}
                  suffixIcon={<CalendarOutlined style={{ fontSize: "14px" }} />}
                  size="large"
                  {...field}
                />
                <span className="danger-text">
                  {fieldState?.error?.message}
                </span>
              </>
            )}
          />
        </Form.Item>
      </div>
      <Travellers
        isFlight
        forWhich="flight"
        control={control}
        formValue={getValues("flight")}
      />
      <Form.Item className={styles["search-submit"]}>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#003b95", width: "100%" }}
        >
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};
