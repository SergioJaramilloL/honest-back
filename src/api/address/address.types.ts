export interface Address {
  _id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  plans: {
    monthsFree: number;
    label: string;
    price: string;
  }[];
}