export type FlightCardType = {
  id: string;
  airline: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  image: string;
  price: number;
  rating: number;
};

export type FlightCardProps = {
  flight: FlightCardType;
};
