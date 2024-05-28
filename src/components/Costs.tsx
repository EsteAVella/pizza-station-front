import Pizzas from "../models/data/pizzas.json";
import { calculateTotalCost } from "../helpers/calculateTotalCost";
import CostsList from "../models/data/costsList.json";

const Costs = () => {
  const value = calculateTotalCost(Pizzas[0]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <span className="text-3xl font-bold block mb-6">
        Lista Gastos x Unidad
      </span>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-yellow-200 border-2 border-red-500 mb-4">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-3 px-4 border-r">M.P</th>
              <th className="py-3 px-4">Cost P.U</th>
            </tr>
          </thead>
          <tbody>
            {CostsList.map((p, index) => (
              <tr key={index} className="bg-yellow-100 even:bg-yellow-200">
                <td className="py-2 px-4 border-r">{p.name}</td>
                <td className="py-2 px-4">${p.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-6 shadow-lg transition-all">
        Add Cost
      </button>

      <h2 className="font-bold text-3xl mt-10 mb-6">Ingredientes</h2>
      <h1 className="text-lg mb-4">
        Soy una muzza por ahora, pero hay un seleccionador acá
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-yellow-200 border-2 border-red-500 mb-4">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-3 px-4 border-r">Ingredient</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {Pizzas[0].ingredients?.map((p, index) => (
              <tr key={index} className="bg-yellow-100 even:bg-yellow-200">
                <td className="py-2 px-4 border-r">{p.name}</td>
                <td className="py-2 px-4">{p.amount}.u</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <span className="font-semibold block mt-6">COSTO TOTAL: ${value}</span>

      <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-6 shadow-lg transition-all">
        Add Pizza
      </button>
    </div>
  );
};

export default Costs;
