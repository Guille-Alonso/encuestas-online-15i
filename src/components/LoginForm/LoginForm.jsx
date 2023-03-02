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
//   const [values, setValues]= useState({
//     email:"",
//     password:"",
//   });

//   const [backErrors, setBackErrors]= useState(false);

//   const handleChange=(e)=>{
//   setValues({
//     ...values,
//     [e.target.name]: e.target.value,
//   });
// };
// const handleSubmit= async (e)=>{
//   try {
//     e.preventDefault ();
//     const {data} = await axios.post("/users/login",values);
//   
//   }catch (error){
//  
//       toast.error('error')
// setBackErrors (true);
//   }
// };
// useEffect (()=>{
//   if (backErrors){
//     setTimeout(()=>{
//   setBackErrors (false);
//     }, 3000);
//   }
// }, [backErrors]);

  return (
    <>
    
    <Form  onSubmit= {handleSubmit}>
       
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required value={values.email} onChange={handleChange} name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control required value={values.password} onChange={handleChange} name="password" type="password" placeholder="Contraseña" />
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
{/* 
      {backErrors && ( <Alert variant= "danger" className="mt-3"
      style={{
        padding: "1px 5px",
        }}
        > El formato de los datos enviados son incorrectos
      </Alert>)
      } */}
    
      </Form>
      </>
  );
}
export default LoginForm;