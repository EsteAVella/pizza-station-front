import { useState } from "react";
import postPizzas from "../helpers/postPizzas";
import useIngredents from "../hooks/useIngredents";

const AddPizza = () => {
  const [formData, setFormData] = useState({
    name: "",
    product: 0,
    price: 0,
    totalCost: 0,
    ingredents: [],
  });

  const { ingredents, loading } = useIngredents();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedIngredent = ingredents.find(
      (ingredent) => ingredent.id === parseInt(event.target.value)
    );
    if (selectedIngredent && !formData.ingredents.includes(selectedIngredent)) {
      setFormData({
        ...formData,
        ingredents: [formData.ingredents, selectedIngredent],
      });
    }
  };
  const removeIngredent = (id: number) => {
    setFormData({
      ...formData,
      ingredents: formData.ingredents.filter(
        (ingredent) => ingredent.id !== id
      ),
    });
  };

  const submitPizza = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postPizzas(formData);
    console.log(formData);
  };

  return (
    <>
      <div></div>
      <form onSubmit={submitPizza} className="space-y-4">
        <div>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            name="name"
            placeholder="Ingrese el nombre de la pizza"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="number"
            name="price"
            placeholder="Ingrese el precio del producto"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="number"
            name="product"
            placeholder="Ingrese el numero del producto"
            value={formData.product}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="number"
            name="totalCost"
            placeholder="Ingrese el precio del producto"
            value={formData.totalCost}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2">Seleccione Ingredientes</label>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <select
              className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={handleIngredentChange}
              multiple
            >
              <option value="">Seleccione un ingrediente</option>
              {ingredents.map((ingredent) => (
                <option key={ingredent.id} value={ingredent.id}>
                  {ingredent.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <label className="block mb-2">Ingredientes Seleccionados</label>
          <ul>
            {formData.ingredents.map((ingredent) => (
              <li key={ingredent.id}>
                {ingredent.name}
                <button
                  type="button"
                  onClick={() => removeIngredent(ingredent.id)}
                  className="ml-2 text-red-500"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-6 shadow-lg transition-all">
          Add Pizza
        </button>
      </form>
    </>
  );
};

export default AddPizza;
