import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8585",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
