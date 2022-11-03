import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
