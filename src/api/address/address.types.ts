import { Plan } from "../plan/plan.types";

export type Address = {
  _id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal: string;
  plans: Plan[];
}