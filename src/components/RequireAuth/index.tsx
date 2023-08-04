import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext, AuthContextType } from '../AuthProvider';

const useAuth = () => useContext(AuthContext);

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const { token } = auth as AuthContextType;
  const location = useLocation();

  if (!token) return <Navigate to='/login' state={{ from: location }} replace />;

  return children;
};

export default RequireAuth;
