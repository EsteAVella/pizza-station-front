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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredentChange = (event) => {
    const selectedIngredent = ingredents.find(
      (ingredent) => ingredent.id === parseInt(event.target.value)
    );
    if (
      selectedIngredent &&
      !formData.ingredents.some(
        (ingredent) => ingredent.id === selectedIngredent.id
      )
    ) {
      setFormData({
        ...formData,
        ingredents: [...formData.ingredents, selectedIngredent],
      });
    }
  };

  const removeIngredent = (id) => {
    setFormData({
      ...formData,
      ingredents: formData.ingredents.filter(
        (ingredent) => ingredent.id !== id
      ),
    });
  };

  const submitPizza = (event) => {
    event.preventDefault();
    postPizzas(formData);
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <form onSubmit={submitPizza} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre de la pizza
          </label>
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
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Precio de venta
          </label>
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
          <label
            htmlFor="product"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Número del producto
          </label>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="number"
            name="product"
            placeholder="Ingrese el número del producto"
            value={formData.product}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Seleccione Ingredientes
          </label>
          {loading ? (
            <div className="text-center text-gray-500">Cargando...</div>
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
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Ingredientes Seleccionados
          </label>
          <ul className="list-disc list-inside">
            {formData.ingredents.map((ingredent) => (
              <li
                key={ingredent.id}
                className="flex justify-between items-center"
              >
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
        <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-6 shadow-lg transition-all">
          Agregar Pizza
        </button>
      </form>
      <h1>estoy up to date</h1>
    </div>
  );
};

export default AddPizza;
