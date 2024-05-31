import axios from "axios";
import { Ingredient } from "../interface/ingredient";

const postIngrendents = async (data: Ingredient) => {
  try {
    await axios.post("http://localhost:3000/ingredents", data);
  } catch (error) {
    console.error("FAIL,", error);
  }
};

export default postIngrendents;
