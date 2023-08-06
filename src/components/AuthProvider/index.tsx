import React, { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserType = {
  id: string;
  is_admin: boolean;
  is_disabled: boolean;
  nickname: string;
  username: string;
};

export interface AuthContextType {
  token: string | null;
  user: UserType | null;
  saveTokenAndUser: (token: string, currentUser: UserType) => void;
  clearTokenAndUser: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 中使用');
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<UserType | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  // console.log('>>>', token, user);

  const saveTokenAndUser = (tokenTemp: string, userTemp: UserType) => {
    // 1. 打印 token 和用户信息
    // console.log(tokenTemp, userTemp);
    // 2. 保存 token 和用户信息
    setToken(tokenTemp);
    setUser(userTemp);
    // 3. 将 token 保存到 localStorage 中
    localStorage.setItem('token', tokenTemp);
    // 4. 将用户信息保存到 localStorage 中
    localStorage.setItem('user', JSON.stringify(userTemp));
  };

  const clearTokenAndUser = (token: string) => {
    // 1. 清空token
    setToken(null);
    // 2. 清空用户信息
    setUser(null);
    // 3. 清空 localStorage 中的 token
    localStorage.removeItem('token');
    // 4. 清空 localStorage 中的用户信息
    localStorage.removeItem('user');
    // 5. 跳转到登录页
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, user, saveTokenAndUser, clearTokenAndUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
