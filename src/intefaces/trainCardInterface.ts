


export interface City {
  _id: string;
  name: string;
}

export interface RailwayStation {
  railway_station_name: string;
  city: City;
  datetime: number;
}

export interface PriceInfo {
  top_price: number;
  bottom_price: number;
  side_price?: number;
  price?: number;
}

export interface ClassPriceInfo {
  first?: PriceInfo;
  second?: PriceInfo;
  third?: PriceInfo;
  fourth?: PriceInfo;
}

export interface AvailableSeatsInfo {
  first?: number,
  second?: number,
  third?: number,
  fourth?: number,
}

export interface Train {
  _id: string;
  name: string;
}

export interface Departure {
  _id: string;
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  duration: number;
  available_seats: number;
  available_seats_info: AvailableSeatsInfo;
  train: Train;
  from: RailwayStation;
  to: RailwayStation;
  price_info: ClassPriceInfo;
}

export interface Item {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: AvailableSeatsInfo;
  departure: Departure;
}

export interface ResponseData {
  total_count: number;
  items: Item[];
}
