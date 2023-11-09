import axios from "axios";

// const BASE_URL = "http://127.0.0.1:8000";
const BASE_URL = "https://mealyapp-ca9e2ab85b68.herokuapp.com/";

export default axios.create({
  baseURL: BASE_URL,
});
