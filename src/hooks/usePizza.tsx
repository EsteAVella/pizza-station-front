import { useContext } from "react";
import { PizzaContext } from "../components/context/PizzaContext";

const usePizzas = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error("usePizzas must be used within a PizzaProvider");
  }
  return context;
};

export default usePizzas;
