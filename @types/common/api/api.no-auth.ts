import axios, { AxiosInstance } from "axios";
const { BASE_FETCH_URL } = process.env;

export const AXIOS_NOAUTH: AxiosInstance = axios.create({
  baseURL: BASE_FETCH_URL,
  withCredentials: true,
});

AXIOS_NOAUTH.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AXIOS_NOAUTH.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    alert("서버에서 응답이 없습니다.");
    return Promise.reject(error);
  }
);
