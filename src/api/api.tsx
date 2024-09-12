import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

// Створення кастомного інстансу Axios
const api = axios.create({
  baseURL: "http://95.135.51.126/api/",
  withCredentials: true, // Дозволяє відправляти кукі з кожним запитом
});

// Інтерцептор для додавання токену до заголовків
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    if (token) {
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
