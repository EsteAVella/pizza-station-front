import axios from "axios";

const getPizzas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/pizzas");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("FAIL,", error);
  }
};

export default getPizzas;
