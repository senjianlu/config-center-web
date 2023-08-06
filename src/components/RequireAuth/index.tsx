import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token, user } = useAuth();
  const location = useLocation();

  let thisToken = token;
  let thisUser = user;

  // 1. 如果 token 不存在，从 localStorage 中尝试读取
  if (!thisToken) {
    const localStorageToken = localStorage.getItem('token');
    if (localStorageToken) {
      // 1.1 如果 localStorage 中有 token，设置到 state 中
      thisToken = localStorageToken;
    } else {
      // 2.1 如果没有 token，跳转到登录页
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
  }

  // 2. 读取用户信息
  if (!thisUser) {
    const localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
      // 2.1 如果 localStorage 中有用户信息，设置到 state 中
      thisUser = JSON.parse(localStorageUser);
    } else {
      // 2.2 如果没有用户信息，跳转到登录页
      return <Navigate to='/login' state={{ from: location }} replace />;
    }
  }

  return children;
};

export default RequireAuth;
