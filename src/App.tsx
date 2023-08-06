import './App.css';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import AuthProvider from './components/AuthProvider';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        {/* 登录页 */}
        <Route path="/login" element={<Login />} />
        {/* 其他页面 */}
        <Route
          path="/*"
          element={
            <RequireAuth>
              <div>需要登录的页面</div>
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
