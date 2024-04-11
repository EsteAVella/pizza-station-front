import Pizzas from "../data/pizzas.json";
import { calculateTotalCost } from "../helpers/calculateTotalCost";
import CostsList from "../data/costsList.json";

// UNA PIZA DE MUZZA QUE TIENE > Muzza > Caja > Masa > Oregano > Aceituna
const Costs = () => {
  const value = calculateTotalCost(Pizzas[0]);

  return (
    <>
      <span className="text-3xl font-bold p-3">Lista Gastos x Unidad</span>
      <div className="bg-yellow-200 columns-2 max-w-96 p-1 border-solid border-2 border-red-500 font-bold pl-2 mt-3">
        <p>M.P</p>
        <p>Cost P.U</p>
      </div>
      <ul>
        {CostsList.map((p) => (
          <div className="bg-yellow-200 columns-2 max-w-96 p-1 border-solid border-2 border-red-500">
            <li className="ml-4 font-thin ">{p.name}</li>
            <li className="ml-4 font-thin">${p.cost}</li>
          </div>
        ))}
      </ul>
      <button className="bg-red-500 rounded-2xl p-2 m-3"> Add Cost</button>
      {/* ACA TERMINA EL COMPONENTE DE LISTA DE GASTOS */}
      <h2 className="font-bold text-3xl">Ingredientes</h2>
      <h1>soy una muzza por ahora Pero hay un seleccionador aca</h1>
      <div className="bg-yellow-200 columns-2 max-w-96 p-1 border-solid border-2 border-red-500 font-bold pl-2">
        <p>Ingredient</p>
        <p>Amount</p>
      </div>
      <ul>
        {Pizzas[0].ingredients?.map((p) => (
          <div className="bg-yellow-200 columns-2 max-w-96 p-1 border-solid border-2 border-red-500">
            <li className="ml-4 font-thin ">{p.name}</li>
            <li className="ml-4 font-thin">{p.amount}.u</li>
          </div>
        ))}
      </ul>
      <span className="font-semibold block ml-3 p-1">
        COSTO TOTAL: ${value}
      </span>
      <button className="bg-red-500 rounded-2xl p-2 mt-2"> Add Pizza</button>
      {/* ACA TERMINA EL COMPONENTE DE INGREDIENTES + ADD PIZZAS */}
    </>
  );
};

export default Costs;
