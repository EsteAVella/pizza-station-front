import { useEffect, useState } from "react";
import { Ingredient } from "../interface/ingredient";
import getIngredents from "../helpers/getIngredents";

const CostsList = () => {
  const [ingredents, setIngredents] = useState<Ingredient[]>([]);

  useEffect(() => {
    getIngredents()
      .then((ingredient) => {
        setIngredents(ingredient);
      })
      .catch((error) => {
        console.error("can not obtain ingredents:", error);
      });
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="font-bold text-3xl mb-6">Costos por ingredientes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-yellow-200 border-2 border-red-500 mb-4">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-3 px-4 border-r">Ingredient</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {ingredents.map((ingredent, index) => (
              <tr key={index} className="bg-yellow-100 even:bg-yellow-200">
                <td className="py-2 px-4 border-r">{ingredent.name}</td>
                <td className="py-2 px-4">{ingredent.price}.u</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostsList;
