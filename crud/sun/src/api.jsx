
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2002", // Your backend API URL
});

export default api;
