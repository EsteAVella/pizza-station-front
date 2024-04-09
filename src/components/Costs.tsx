import Pizzas from "../data/pizzas.json";
import { calculateTotalCost } from "../helpers/calculateTotalCost";

// UNA PIZA DE MUZZA QUE TIENE > Muzza > Caja > Masa > Oregano > Aceituna
const Costs = () => {
  const value = calculateTotalCost(Pizzas[0]);

  return (
    <>
      <h1>soy una muzza por ahora </h1>
      <h2 className="font-bold text-3xl">Ingredientes</h2>
      <ul>
        {Pizzas[0].ingredients?.map((p) => (
          <li className="p-1 ml-4 font-thin ">
            {p.name} {p.amount}u
          </li>
        ))}
        <span className="font-semibold">COSTO TOTAL: ${value}</span>
      </ul>
    </>
  );
};

export default Costs;
