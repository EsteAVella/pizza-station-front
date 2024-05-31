import { Ingredient } from "./ingredient";

export interface Pizza {
  id: number;
  name: string;
  product: number;
  price: number;
  totalCost: number;
  ingredents: Ingredient[];
}
