import axios from "axios";

const getIngredents = async () => {
  try {
    const response = await axios.get("http://localhost:3000/ingredents");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("FAIL,to catch Ingredents", error);
  }
};

export default getIngredents;
