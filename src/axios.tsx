import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  // baseURL: "http://localhost:3000",
  timeout: 1000 * 1,
});

// 请求拦截器，为请求头添加 token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  }
  // (error) => {
  //   return Promise.reject(error);
  // }
);

// 响应拦截器，处理 token 过期
instance.interceptors.response.use(
  (response) => {
    return response;
  }
  // (error) => {
  //   if (error.response) {
  //     switch (error.response.status) {
  //       case 401:
  //         // 返回 401 清除 token 信息并跳转到登录页面
  //         localStorage.removeItem("token");
  //         router.replace({
  //           path: "/login",
  //           query: { redirect: router.currentRoute.fullPath },
  //         });
  //     }
  //   }
  //   return Promise.reject(error.response.data); // 返回接口返回的错误信息
  // }
);

export default instance;
