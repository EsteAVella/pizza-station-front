import { Ingredient } from "./ingredient";
export interface Product {
  producto: number;
  nombre: string;
  precio: number;
  ingredients: Ingredient[];
  totalCost: number;
}
