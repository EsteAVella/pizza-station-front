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
    <>
      <h2 className="font-bold text-5xl p-8">GASTOS</h2>

      <form onSubmit={submitBill}>
        <input
          className="bg-red-200"
          type="text"
          name="name"
          placeholder="ingrese el nombre"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          className="bg-green-200 p-2 rounded"
          onChange={handleInputChange}
        />
        <button className="bg-indigo-500 rounded p-2 ml-2 mb-7" type="submit">
          Add
        </button>
      </form>
      <span> FALTA Lista de Gastos</span>
    </>
  );
};

export default Bills;
