


export interface cityInterface {
  _id: string;
  name: string;
}

export interface railwayStationInterface {
  railway_station_name: string;
  city: cityInterface;
  datetime: number;
}

export interface priceInfoInterface {
  top_price: number;
  bottom_price: number;
  side_price?: number;
  price?: number;
}

export interface classPriceInterface {
  first?: priceInfoInterface;
  second?: priceInfoInterface;
  third?: priceInfoInterface;
  fourth?: priceInfoInterface;
}

export interface availableSeatsInterface {
  first?: number,
  second?: number,
  third?: number,
  fourth?: number,
}

export interface trainInterface {
  _id: string;
  name: string;
}

export interface departureInterface {
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
  available_seats_info: availableSeatsInterface;
  train: trainInterface;
  from: railwayStationInterface;
  to: railwayStationInterface;
  price_info: classPriceInterface;
}

export interface itemsInterface {
  have_first_class: boolean;
  have_second_class: boolean;
  have_third_class: boolean;
  have_fourth_class: boolean;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  is_express: boolean;
  min_price: number;
  available_seats: number;
  available_seats_info: availableSeatsInterface;
  departure: departureInterface;
}

export interface ResponseData {
  total_count: number;
  items: itemsInterface[];
}