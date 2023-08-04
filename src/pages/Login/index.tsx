import { useContext } from 'react';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProConfigProvider,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { AuthContext } from '@/components/AuthProvider';
import {
  authLogin,
} from './service';

type LoginFormDataType = {
  username: string;
  password: string;
};

const useAuth = () => useContext(AuthContext);

export const Index = () => {
  let { token, login } = useAuth() as any;

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
      // 3.1.1 保存token
      token = result.data.data.token;
      login(token);
      // 3.1.2 跳转到首页
      window.location.href = '/';
    // 3.2 登录失败
    } else {
      console.log('登录失败');
    }
  };

  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          subTitle="全球最大的代码托管平台"
          onFinish={handleLogin}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
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
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
};

export default Index;
