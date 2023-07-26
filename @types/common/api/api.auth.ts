import axios, { AxiosInstance } from "axios";
const { BASE_FETCH_URL } = process.env;

export const AXIOS_AUTH: AxiosInstance = axios.create({
  baseURL: BASE_FETCH_URL,
  withCredentials: true,
});

// AXIOS_AUTH.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// AXIOS_AUTH.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     return Promise.reject(error);
//   }
// );
