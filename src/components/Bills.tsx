import { useState } from "react";

const Bills: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitBill = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Datos del formulario", formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="font-bold text-5xl text-gray-800 mb-8 text-center">
        GASTOS
      </h2>
      <form onSubmit={submitBill} className="space-y-4">
        <div>
          <input
            className="w-full bg-gray-200 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            name="name"
            placeholder="Ingrese el nombre"
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
        <div className="text-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 mt-4 shadow-lg transition-all"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bills;
