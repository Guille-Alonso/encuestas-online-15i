import { useState, useEffect } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "../../config/axios";
import { toast } from "react-toastify";




const LoginForm =()=>{

  const [values, setValues]= useState({
    email:"",
    password:"",
  });

  const [backErrors, setbackErrors]=useState(false);

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
    console.log(error);
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
      <Button 
        type="submit"
        style={{
          backgroundColor: "#083045"
          
        }}
          >
       Ingresar
      </Button>
      {backErrors && (
      <Alert variant= "danger" className="mt-3"> Los datos enviados son incorrectos
      </Alert>)
      }
      </Form>
      </>
  );
}
export default LoginForm;