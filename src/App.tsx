import { useEffect, useState } from "react";
import Bills from "./components/Bills";
import Costs from "./components/Costs";
import getPizzas from "./helpers/getPizzas";

function App() {
  const [Pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas()
      .then((pizzas) => {
        setPizzas(pizzas);
      })
      .catch((error) => {
        console.error("error when obtains pizzas", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 via-red-200 to-yellow-300 p-7">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center mb-10">
          <h1 className="font-extrabold text-6xl mb-3 text-red-600 drop-shadow-md">
            Pizza Station
          </h1>
          <h2 className="font-semibold text-4xl text-gray-800 mt-5">
            LISTA DE PIZZAS
          </h2>
        </div>

        <ol className="bg-gray-100 p-5 rounded-lg shadow-inner mb-10">
          {Pizzas.map((pizza, index) => (
            <li
              key={index}
              className="flex justify-between py-2 border-b border-gray-300 last:border-none"
            >
              <span className="font-medium">
                {index + 1}. {pizza.name}
              </span>
              <span className="text-gray-700">${pizza.price}</span>
            </li>
          ))}
        </ol>

        <div className="mb-10">
          <h2 className="font-semibold text-4xl text-gray-800 mb-5">
            Calculadora de costos
          </h2>
          <div className="bg-gray-100 p-5 rounded-lg shadow-inner">
            <Costs />
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="font-semibold text-4xl text-gray-800 mb-5">Ventas</h2>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-2 shadow-lg transition-all">
            Nuevo Pedido
          </button>
        </div>

        <div>
          <h2 className="font-semibold text-4xl text-gray-800 mb-5">Resumen</h2>
          <div className="bg-gray-100 p-5 rounded-lg shadow-inner">
            <Bills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
