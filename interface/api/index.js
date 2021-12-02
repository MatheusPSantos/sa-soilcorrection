import axios from "axios";

const apiURL = "http://localhost:8080";

export const api = axios.create({ baseURL: apiURL});
