import Bills from "./components/Bills";
import Costs from "./components/Costs";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <>
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
          <PizzaList />
          <Costs />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-4xl text-gray-800 mb-5">Resumen</h2>
        <div className="bg-gray-100 p-5 rounded-lg shadow-inner">
          <Bills />
        </div>
      </div>
    </>
  );
}

export default App;
