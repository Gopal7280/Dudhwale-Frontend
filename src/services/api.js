// // src/services/api.js
// import axios from 'axios'
// import { config } from '../config/app'

// const api = axios.create({
//   baseURL: config.apiBaseUrl,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// export const apiGet = async (url, params = {}) => {
//   const res = await api.get(url, { params })
//   return res.data
// }

// export const apiPost = async (url, data = {}) => {
//   const res = await api.post(url, data)
//   return res.data
// }

// export const apiPut = async (url, data = {}) => {
//   const res = await api.put(url, data)
//   return res.data
// }

// export const apiDelete = async (url) => {
//   const res = await api.delete(url)
//   return res.data
// }

// src/services/api.js



// import axios from 'axios'
// import { config } from '../config/app'

// const api = axios.create({
//   baseURL: config.apiBaseUrl,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// export const apiGet = async (url, params = {}, options = {}) => {
//   const res = await api.get(url, { params, ...options })
//   return res.data
// }

// export const apiPost = async (url, data = {}, options = {}) => {
//   const res = await api.post(url, data, options)   // ✅ options include headers
//   return res.data
// }

// export const apiPut = async (url, data = {}, options = {}) => {
//   const res = await api.put(url, data, options)
//   return res.data
// }

// export const apiDelete = async (url, options = {}) => {
//   const res = await api.delete(url, options)
//   return res.data
// }



import axios from "axios";
import { config } from "../config/app";

const api = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor (Attach Token)
api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("Dudhwaletoken");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => Promise.reject(err)
);

// ✅ Response Interceptor (Simplify Data & Errors)
api.interceptors.response.use(
  (res) => res.data, // direct data return
  (err) => {
    const message =
      err.response?.data?.message ||
      err.message ||
      "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  }
);

// ✅ Utility Functions
export const apiGet = (url, params = {}, options = {}) =>
  api.get(url, { params, ...options });

export const apiPost = (url, data = {}, options = {}) =>
  api.post(url, data, options);

export const apiPut = (url, data = {}, options = {}) =>
  api.put(url, data, options);

export const apiDelete = (url, options = {}) => api.delete(url, options);

export default api;
