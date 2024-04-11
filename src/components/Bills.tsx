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
          className="bg-red-200 p-2 rounded"
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
          className="bg-red-200 p-2 rounded "
          onChange={handleInputChange}
        />
        <button className="bg-red-500 rounded-2xl p-2 mt-2" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Bills;
