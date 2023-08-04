import axios from "axios";

axios.defaults.timeout = 100000;
// axios.defaults.baseURL = "http://localhost:8080";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);