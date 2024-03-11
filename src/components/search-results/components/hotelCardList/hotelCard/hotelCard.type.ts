export type HotelCardType = {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
};

export type HotelCardProps = {
  hotel: HotelCardType;
};
