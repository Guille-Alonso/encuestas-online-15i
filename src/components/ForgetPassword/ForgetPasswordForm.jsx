import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import "../../pages/Login/forgetpassword.css";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";



const ForgetPasswordForm =()=>{

  const navigate = useNavigate();

const goToLogin =()=>{
navigate('/login')
}

  const [email,setEmail]=useState("");
  

  
const handleSubmit= (e)=>{
  e.preventDefault();
// console.log (email);
if ([email].includes ("")){
  toast.error("El email es obligatorio",{
   theme: "dark",
});
return;
}

console.log ("Correcto");
};


  return(
    <>
   <Container fluid
   style={{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
   }}
   >
      <Form style={{
          
          minHeight:'69vh',
      }}>
        <Modal.Title style={{
        color: "#083045",
        fontSize: "30px",
        paddingBottom: "4%",
        marginTop:'28px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
        ¿Has olvidado tu contraseña?</Modal.Title>
        <div style={{
        
        marginLeft:'30px',
        marginRight:'30px',
       
      }}>
             <p style={{
        color: "#083045",
        fontSize: "18px",
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '0 px',
      }}>Introduce el email que utilizaste para registrate debajo y pulsa Enviar. </p><p style={{
        color: "#083045",
        fontSize: "18px",
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '0 px',
        paddingBottom:'1rem',
      }}> En pocos minutos recibirás un email para obtener una nueva contraseña.</p>
        </div>
        <div className="d-flex   justify-content-center">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
        
        <Form.Control required value={email} onChange= {(e)=>setEmail (e.target.value)} name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>

 </div> 
 <div className="d-flex   justify-content-center">

    <Button className='botones'variant="outline-success"
      type="submit"
      style={{
        backgroundColor: "#083045",
          fontSize: "20px",
          padding: "4px 90px",
          display:'flex',
          justifyContent: 'center',
          
        
      }}
        >
          Enviar
    </Button>
   
</div> 
<Link to="/Login" style={{
          color: "#083045",
          fontSize: "15px",
          fontWeight: 'bold',
          padding: "4px 4px",
          outline: "white",
          marginTop: '5%',
          display:'flex',
          justifyContent: 'center',
        }} >Volver</Link>
</Form>
</Container>

</>
);
    }

export default ForgetPasswordForm;