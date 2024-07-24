export interface Coach {
  _id: string;
  name: string;
  class_type: string;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number,
  side_price: number,
  linens_price: number,
  wifi_price: number,
  is_linens_included: boolean,
  available_seats: number,
  train: string
}

export interface Seats {
  index: number;
  available: boolean;
}

export interface trainOptionsInterface {
  coach: Coach | {};
  seats: Seats[];
}

