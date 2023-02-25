import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "../../config/axios";
import { toast } from "react-toastify";



const LoginForm =()=>{

  const [values, setValues]= useState({
    email:"",
    password:"",
  });

  const handleChange=(e)=>{
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit= async (e)=>{
  
  try {
    e.preventDefault ();
    const {data} = await axios.post("/users/login");
    console.log(data);
  }catch (error){
toast.error("Hubo un error, intenta de nuevo");
  }
};
  return (
   
    <Form onSubmit= {handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={values.email} onChange={handleChange} name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={values.password} onChange={handleChange} name="password" type="password" placeholder="contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    
  );
}
export default LoginForm;