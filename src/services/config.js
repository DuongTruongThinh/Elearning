import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import { userLocalStorage } from "./localServices";
import { store } from "../redux/store";
import { setLoadingOff, setLoadingOn } from "../redux/reducer/spinnerReducer";

export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOCIsIkhldEhhblN0cmluZyI6IjIxLzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMDk3OTIwMDAwMCIsIm5iZiI6MTY4NzE5NDAwMCwiZXhwIjoxNzExMTI2ODAwfQ.I9iDnvUJNQaG_RBPSODU3vvlNF0JJ7lRamr221wclIQ";

export const configHeader = () => {
  return {
    TokenCybersoft: TOKEN_CYBER,
  };
};

export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
    Authorization: "Bearer " + userLocalStorage.get()?.accessToken,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(setLoadingOn());
    console.log("api di");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("api ve");
    store.dispatch(setLoadingOff());

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
