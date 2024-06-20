import axios from "axios";
import { Pizza } from "../interface/pizza";

const postPizzas = async (data: Pizza) => {
  try {
    await axios.post("http://localhost:3000/pizzas", data);
  } catch (error) {
    console.error("FAIL to insert pizza in db,", error);
  }
};

export default postPizzas;
