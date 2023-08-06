import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormText,
} from '@ant-design/pro-components';
import {
  authLogin,
} from './service';
import { useAuth } from '@/components/AuthProvider';
import { useNavigate } from 'react-router-dom';

type LoginFormDataType = {
  username: string;
  password: string;
};

export const Index = () => {
  const { saveTokenAndUser } = useAuth() as any;
  const navigate = useNavigate();

  /**
   * 登录
   */
  const handleLogin = async (values: LoginFormDataType) => {
    // 1. 获取表单数据
    const username = values.username;
    const password = values.password;
    // 2. 发送请求
    const result = await authLogin({ username, password }) as any;
    console.log(result);
    // 3. 处理响应
    // 3.1 登录成功
    if (result.status === 200 && result.data && result.data.code === 200) {
      // 3.1.1 保存 token 和用户信息
      saveTokenAndUser(result.data.data.token, result.data.data.user);
      // 3.1.2 跳转到首页
      navigate('/');
    // 3.2 登录失败
    } else {
      console.log('登录失败');
    }
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          title="配置中心"
          subTitle="账号密码默认均为 admin"
          onFinish={handleLogin}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Index;
