import { useState, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "../../config/axios";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import React from "react";
import { Link } from "react-router-dom";



const LoginForm =()=>{

  const [values, setValues]= useState({
    email:"",
    password:"",
  });

  const [backErrors, setBackErrors]= useState(false);

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
    // console.log(error);
toast.error("Hubo un error, intenta de nuevo");
setBackErrors (true);
  }
};
useEffect (()=>{
  if (backErrors){
    setTimeout(()=>{
  setBackErrors (false);
    }, 3000);
  }
}, [backErrors]);
console.log ("hi");
  return (
    <>
    
    <Form  onSubmit= {handleSubmit}>
       
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={values.email} onChange={handleChange} name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control value={values.password} onChange={handleChange} name="password" type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>
      <Button variant="outline-success"
        type="submit"
        style={{
          backgroundColor: "#083045",
          fontSize: "20px",
          padding: "4px 4px",
        }}
          >
       Ingresar
      </Button>

      <Link to="/ForgetPassword" style={{
          color: "#083045",
          fontSize: "15px",
          padding: "4px 4px",
          outline: "white",
        }} >Recuperar contraseña</Link>

      {backErrors && ( <Alert variant= "danger" className="mt-3"
      style={{
        padding: "1px 5px",
        }}
        > El formato de los datos enviados son incorrectos
      </Alert>)
      }
      </Form>
      </>
  );
}
export default LoginForm;