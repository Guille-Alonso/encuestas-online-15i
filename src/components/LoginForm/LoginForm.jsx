import { useState, useEffect, useContext } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "../../config/axios";
import { LOGIN_VALUES } from "../../constants";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import useForm from "../../hook/useForm"
import { Link, useNavigate } from "react-router-dom";
import { SurveysContext } from "../../context/addSurveyContext";



const LoginForm =()=>{

  const { login, authenticated } = useContext(SurveysContext);
  const { handleChange, handleSubmit, values} = useForm(
    LOGIN_VALUES,
    login
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);


  return (
    <>
    
    <Form  className= "loginform" onSubmit= {handleSubmit} 
    style={{
          
         minHeight:'100vh',
         
                  
        }}
        >
       
<Form.Group className="mb-3 w-96" controlId="formBasicEmail">
        <Form.Label style={{
          color: "#083045",
          fontSize: "15px",
          fontWeight: 'bold',
          padding: '8px',
          
        }}>Email</Form.Label>
        <Form.Control required value={values.email} onChange={handleChange} name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{
          color: "#083045",
          fontSize: "15px",
          fontWeight: 'bold',
        }}>Contraseña</Form.Label>
        <Form.Control required value={values.password} onChange={handleChange} name="password" type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" style={{
          color: "#083045",
          fontSize: "15px",
          marginTop: '10%',
          fontWeight: 'bold',
        }} />
      </Form.Group >

<div style={{
          
          padding: "4px 4px",
          display:'flex',
          justifyContent: 'center',
          
        }}><Button variant="outline-success"
        type="submit"
        style={{
          backgroundColor: "#083045",
          fontSize: "20px",
          padding: "4px 4px",
          display:'flex',
          justifyContent: 'center',
          
        }}
          >
       Ingresar
      </Button></div>      
      

      <Link to="/ForgetPassword" style={{
          color: "#083045",
          fontSize: "15px",
          fontWeight: 'bold',
          padding: "4px 4px",
          outline: "white",
          marginTop: '10%',
          display:'flex',
          justifyContent: 'center',
        }} >Recuperar contraseña</Link>
    
      </Form>
      </>
  );
}
export default LoginForm;