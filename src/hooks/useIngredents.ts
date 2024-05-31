import { useState, useEffect } from "react";
import getIngredents from "../helpers/getIngredents"; // Asumiendo que tienes un helper para obtener los ingredientes

const useIngredents = () => {
  const [ingredents, setIngredents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIngredents()
      .then((data) => {
        setIngredents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
        setLoading(false);
      });
  }, []);

  return { ingredents, loading };
};

export default useIngredents;
