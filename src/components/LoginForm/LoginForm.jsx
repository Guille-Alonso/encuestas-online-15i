import React from 'react';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = (values ) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ display: 'block', position: 'initial' }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Por favor ingresa su email' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa su contraseña' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password" placeholder="contraseña"/>
      </Form.Item>
      <Form.Item >
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recuérdame</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/forgot">
          Recuperar contraseña
        </Link>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" className="login-form-button">
          Ingresar</Button>  <a href="">Registrarse</a>
      </Form.Item>
      
    </Form>
  );
};

export default LoginForm;