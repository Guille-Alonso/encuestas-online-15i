import { useState, useEffect, useContext } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "../../config/axios";
import { LOGIN_VALUES } from "../../constants";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import useForm from "../../hook/useForm"
import { Link, useNavigate } from "react-router-dom";
import { SurveysContext } from "../../context/addSurveyContext";
import { validationLogin } from "../../helpers/validationsLogin";
import {RiEyeLine,RiEyeOffLine} from "react-icons/ri";
import "../Styles/loginForm.css"

const LoginForm =()=>{

  const { login, authenticated } = useContext(SurveysContext);
  const [showPassword, setShowPassword] = useState(false)

  const { handleChange, handleSubmit, values,errors} = useForm(
    LOGIN_VALUES,
    login,
    null,
    null,
    validationLogin
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated]);

  const handleShowPassword = ()=>{
    setShowPassword(!showPassword)
  }

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
        <Form.Control required value={values.email} onChange={handleChange} name= "email" type="email" placeholder="Ingresa tu email" maxLength={35}/>
      </Form.Group>

      <Form.Group className="mb-3 formPassword" controlId="formBasicPassword">
        <Form.Label style={{
          color: "#083045",
          fontSize: "15px",
          fontWeight: 'bold',
        }}>Contraseña</Form.Label>
        <Form.Control required value={values.password} onChange={handleChange} name="password" type={showPassword? "text" : "password"} placeholder="Contraseña" maxLength={25} minLength={5}/>
      {showPassword?
        <RiEyeOffLine onClick={handleShowPassword} className="iconPassword"/>
        :
        <RiEyeLine onClick={handleShowPassword} className="iconPassword" />  
      }
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
      {Object.keys(errors).length !== 0 &&
          Object.values(errors).map((error, index) => (
            <Alert variant="danger" className="mt-3" key={index}>
              {error}
            </Alert>
          ))}

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