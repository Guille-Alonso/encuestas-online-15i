import React from 'react';
import { LockOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';


const LoginForm = () => {
const [formOutcome, setFormOutcome]= useState("");
const [values, setValues]=useState({
  username:"",
  password:""
})

const handleChange =(e)=>{
  setValues({
    ...values,
    [e.target.name]:e.target.value
  })
};
const handleSubmit= (e)=>{
  e.preventDefault()
  setFormOutcome=(values);
}

  // const onFinish = (values ) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <>
    <Form 
      // name="normal_login"
      // className="login-form"
      // // initialValues={{ remember: true }}
      // // onFinish={onFinish}
      // style={{ display: 'block', position: 'initial' }}
    >
      <Form.Item 
      onSubmit={handleSubmit}
        name="username"
        rules ={[{ required: true, message: 'Por favor ingresa un Usuario o Correo electrónico!' }]}>
        <Input  prefix={<UserOutlined className="site-form-item-icon" onChange={handleChange}  value={values.username} />} placeholder="Usuario" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Por favor ingresa una contraseña' }]}>
        <Input 
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password" placeholder="Contraseña" onChange={handleChange}  value={values.password}/>
      </Form.Item>

      <Form.Item >
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recuérdame</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgetPassword">
          Recuperar contraseña
        </a>
      </Form.Item>
     
      <Form.Item > 
        <div className="d-grid gap-2">
                <Button type="primary" htmlType="submit" className="login-form-button" >
          Ingresar</Button>   
          </div>
          
          
          {/* <a href="">Registrarse</a></div> */}
      </Form.Item> 
      
    </Form>
    <div>
      {Object.values(formOutcome).map(value=>value)}
      </div>
    </>
  );
};

export default LoginForm;