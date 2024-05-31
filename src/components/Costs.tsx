//import { calculateTotalCost } from "../helpers/calculateTotalCost";

import usePizzas from "../hooks/usePizza";
import { useState } from "react";
import CostsList from "./CostsList";
import postIngrendents from "../helpers/postIngrendents";

const Costs = () => {
  //const value = calculateTotalCost(Pizzas[0]);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
  });

  const { pizzas, loading } = usePizzas();
  console.log(pizzas);
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitBill = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postIngrendents(formData);
  };

  return (
    <div className="mb-10">
      <h2 className="font-semibold text-4xl text-gray-800 p-5">Costos</h2>
      <div className="bg-gray-100 p-5 rounded-lg shadow-inner">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-2xl mx-auto">
          <CostsList />
          <span className="text-3xl font-bold block mt-3 ml-5">Costos</span>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-yellow-200 border-2 border-red-500 mb-4"></table>
          </div>
          <form onSubmit={submitBill} className="space-y-4">
            <div>
              <input
                className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                type="text"
                name="name"
                placeholder="Ingrese el nombre del ingrediente"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                type="number"
                name="price"
                placeholder="Ingrese el precio"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-6 shadow-lg transition-all">
              Add Cost
            </button>
          </form>
          <span className="font-semibold block mt-6">COSTO TOTAL: ${}</span>
        </div>
      </div>
    </div>
  );
};

export default Costs;
