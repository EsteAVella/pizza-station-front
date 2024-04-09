import Bills from "./components/Bills";
import Costs from "./components/Costs";
import Pizzas from "./data/pizzas.json";

function App() {
  return (
    <>
      <div className=" p-7 min-w-96 justify-center">
        <h1 className="font-bold text-5xl mb-7 aling">Pizza Station</h1>
        <h2 className="font-bold text-5xl p-8">LISTA DE PIZZAS</h2>
        <ol>
          {Pizzas.map((pizza, index) => (
            <div className="columns-1">
              {index + 1}. {pizza.nombre} ${pizza.precio}
            </div>
          ))}
        </ol>
        <Bills />
        <h2 className="font-bold text-5xl p-8">CALUCULADORA DE Costos</h2>
        <Costs />
        <h2 className="font-bold text-5xl p-8">VENTA</h2>
        <button className="bg-indigo-500 rounded-2xl p-2"> Nuevo Pedido</button>
        <h2 className="font-bold text-5xl p-8">RESUMEN</h2>
      </div>
    </>
  );
}

export default App;
