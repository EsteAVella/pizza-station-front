import { Product } from "../interface/product";
import costList from "../models/data/costsList.json";

export const calculateTotalCost = (product: Product): number => {
  let totalCost = 0;
  for (const ingredient of product.ingredients) {
    const costItem = costList.find((item) => item.name === ingredient.name);
    if (costItem) {
      totalCost += costItem.cost * ingredient.amount;
    }
  }

  return totalCost;
};
