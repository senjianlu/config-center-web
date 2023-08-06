import instance from '@/axios';

export async function authLogin(data: any) {
  return instance.post('/api/auth/login', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function authMe(params: any) {
  return instance.get('/api/auth/me', params);
}

export async function authToken(params: any) {
  return instance.get('/api/auth/token', params);
}

export async function authLogout(data: any) {
  return instance.post('/api/auth/logout', data);
}
