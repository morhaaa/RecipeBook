import axios, { AxiosInstance } from "axios";

const BASE_URL: string =
  import.meta.env.VITE_APP_API_SERVICE || "http://localhost:8080";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
