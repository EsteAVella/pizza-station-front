import usePizzas from "../hooks/usePizza";
import AddPizza from "./AddPizza";

const PizzaList = () => {
  const { pizzas, loading } = usePizzas();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h2 className="font-semibold text-4xl text-gray-800 mt-5">
          LISTA DE PIZZAS
        </h2>
      </div>

      <ol className="bg-gray-100 p-5 rounded-lg shadow-inner mb-10">
        {pizzas.map((pizza, index) => (
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
      <AddPizza />
    </>
  );
};

export default PizzaList;
