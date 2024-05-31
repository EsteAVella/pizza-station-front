import React, { createContext, useState, useEffect, ReactNode } from "react";
import getPizzas from "../../helpers/getPizzas";
import { Pizza } from "../../interface/pizza";

// Define el tipo para el contexto
interface PizzaContextType {
  pizzas: Pizza[];
  loading: boolean;
}

// Crear el contexto con un valor por defecto
export const PizzaContext = createContext<PizzaContextType | undefined>(
  undefined
);

interface PizzaProviderProps {
  children: ReactNode;
}

// Crear el componente proveedor
const PizzaProvider: React.FC<PizzaProviderProps> = ({ children }) => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPizzas()
      .then((pizzas) => {
        setPizzas(pizzas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener las pizzas", error);
        setLoading(false);
      });
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
