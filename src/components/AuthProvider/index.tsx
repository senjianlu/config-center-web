import { ReactNode, createContext, useState } from 'react';

export interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (token: string) => {
    setToken(token);
  };

  const logout = (token: string) => {
    // 1. 清空token
    setToken(null);
    // 2. 跳转到登录页面
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ token: token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
