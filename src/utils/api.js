import axios from "axios";
import HOST from "./host";

const API = axios.create({
  // baseURL:"http://localhost:8000/api/"
  baseURL: `${HOST}/api/`,
});

export default API;
