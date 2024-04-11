import Bills from "./components/Bills";
import Costs from "./components/Costs";
import Pizzas from "./data/pizzas.json";

function App() {
  return (
    <>
      <div className=" p-7 min-w-96 justify-center bg-yellow-300 ">
        <h1 className="font-bold text-5xl mb-7 aling ">Pizza Station</h1>
        <h2 className="font-bold text-5xl p-8">LISTA DE PIZZAS</h2>
        <ol>
          {Pizzas.map((pizza, index) => (
            <div className="columns-1">
              {index + 1}. {pizza.nombre} ${pizza.precio}
            </div>
          ))}
        </ol>
        <Bills />
        <h2 className="font-bold text-5xl p-8">Calculadora de costos</h2>
        <Costs />
        <h2 className="font-bold text-5xl p-8">Ventas</h2>
        <button className="bg-red-500 rounded-2xl p-2 mt-2">
          Nuevo Pedido
        </button>
        <h2 className="font-bold text-5xl p-8">Resumen</h2>
      </div>
      //// precio sugerido/////
    </>
  );
}

export default App;
