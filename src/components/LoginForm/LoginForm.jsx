import { useState } from "react";
import { Form, Button} from "react-bootstrap";
// import {ADD_USER_VALUES} from "../../constants";


const LoginForm =() => {
const [Values, setValues]= useState ({
email:"",
password:"",
})
const handleChange =(e)=>{
  setValues({
    ...values,
    [e.target.name]:e.target.value
  })
}

const handleSubmit = async(e)=>{
  try{
    e.preventDefault();
  const {data} = axios.post ("/users/login")
  console.log (data)
  } catch (error){

  }
}
return (
<Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control name="email" type="email" placeholder="Ingresa un Correo" onChange={handleChange} value={values.email}/>
        <Form.Text className="text-muted">
        
         </Form.Text>
       </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Contraseña</Form.Label>
         <Form.Control name="password"type="password" placeholder="Contraseña" onChange={handleChange} value={values.password} />
       </Form.Group>
       <Form.Group className="d-flex justify-content-between" controlId="loginCheckbox">
       <Form.Check type="switch" label="Recuérdame" />
        
        <Link to="/ForgetPassword">¿Has olvidado tu contraseña?</Link>
       </Form.Group>
       <div className="d-grid gap-2">
       <Button variant="primary" size="l" type="submit">Inicia Sesión</Button></div>
     </Form>
);
}

export default LoginForm;