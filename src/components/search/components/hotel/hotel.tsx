import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Input, DatePicker, Form, Button } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

import styles from "./hotel.module.css";
import { HotelFormValueType } from "./hotel.type";
import { Travellers } from "../common";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { setHotelList } from "@/redux/features/hotelSlice";
import axios from "axios";
import { useQuery } from "react-query";
import { SearchResults } from "@/components/search-results";

const today = dayjs();

const fetchHotelList = async (query: {city: string}) => {
  const response = await axios.get(`http://localhost:4000/hotels`, {
    params: {
      location: query?.city?.toLowerCase(),
    },
  });
  return response.data;
};

export const Hotel = () => {
  const [filterOption, setFilterOption] = useState("default");

  const { control, handleSubmit, setValue, getValues } =
    useForm<HotelFormValueType>();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isFetching, isError, error, data: hotelData, refetch, isPreviousData } = useQuery(
    {
      queryKey: ["hotelListData"], 
      queryFn: () => fetchHotelList({city: getValues("city")}),
      enabled: false,
      onSuccess: (hotelData) => {
        console.log(hotelData)
        dispatch(setHotelList(hotelData));
      },
      refetchOnWindowFocus: false
    },
  );

  useEffect(() => {
    try {
      const { data } = JSON.parse(localStorage.getItem("searchQuery") || "");

      if (!!data) {
        Object.entries(data).forEach(([key, value]) => {
          if (value !== null) {
            if (key === "dates") {
              setValue(key, [dayjs(value?.[0]), dayjs(value?.[1])]);
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
    refetch();
    const query = {
      ...data,
      dates: [data?.dates?.[0].toISOString(), data?.dates?.[1].toISOString()],
    };
    localStorage.setItem(
      "searchQuery",
      JSON.stringify({ mode: "hotel", data: query })
    );
  });

  const onChangeFilterOption = (v: string) => {
    setFilterOption(v);
  }

  return (
    <>
      <div className={styles["search-form"]}>
        <Form
          name="hotel-search-form"
          onFinish={onSubmitHandler}
          className={`${styles["search"]}`}
        >
          <Form.Item name="city">
            <Controller
              name="city"
              control={control}
              rules={{ required: "Please enter a city name" }}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    placeholder="Where are you going?"
                    suffix={
                      <span className={styles.icon}>
                        <HomeOutlined style={{ fontSize: "14px" }} />
                      </span>
                    }
                    size="large"
                    {...field}
                  />
                  <span className="danger-text">{fieldState?.error?.message}</span>
                </>
              )}
            />
          </Form.Item>
          <Form.Item name="dates">
            <Controller
              name="dates"
              control={control}
              rules={{ required: "Please enter check-in & check-out" }}
              render={({ field, fieldState }) => (
                <>
                  <DatePicker.RangePicker
                    minDate={today}
                    popupClassName={styles.calendar}
                    placeholder={["Check-in Date", "Check-out Date"]}
                    suffixIcon={<CalendarOutlined style={{ fontSize: "14px" }} />}
                    size="large"
                    style={{ width: "100%" }}
                    {...field}
                  />
                  <span className="danger-text">{fieldState?.error?.message}</span>
                </>
              )}
            />
          </Form.Item>
          <Travellers
            forWhich="hotel"
            control={control}
            formValue={getValues("hotel")}
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
      </div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h2>{error?.message}</h2>}
      {!!hotelData && <SearchResults mode="hotel" filterOption={filterOption} onChangeFilter={onChangeFilterOption} />}
    </>
  );
};
