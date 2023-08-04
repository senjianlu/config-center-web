import axios from 'axios';

export async function authLogin(data: any) {
  return axios.post('/api/auth/login', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function authMe(params: any) {
  return axios.get('/api/auth/me', params);
}

export async function authToken(params: any) {
  return axios.get('/api/auth/token', params);
}

export async function authLogout(data: any) {
  return axios.post('/api/auth/logout', data);
}
