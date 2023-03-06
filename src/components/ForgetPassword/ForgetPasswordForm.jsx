import Button from 'react-bootstrap/Button';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import "../../pages/Login/forgetpassword.css";
import { Container } from 'react-bootstrap';




const ForgetPasswordForm =()=>{

  const navigate = useNavigate();

const goToLogin =()=>{
navigate('/login')
}

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
        paddingBottom: "5%",
        marginTop:'40px',
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
        fontSize: "20px",
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Introduce el email que utilizaste para registrate debajo y pulsa Enviar.  En pocos minutos recibirás un email para obtener una nueva contraseña.</p>
        </div>
        <div className="d-flex   justify-content-center">
        <Form.Group className='group-email'
         >
        <Form.Control required  name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>
 </div> 
 <div className="d-flex   justify-content-center">
<Button className='botones' variant="outline-success"
    
      style={{
        backgroundColor: "#083045",
        fontSize: "20px",
        padding: "4px",
        margin: "5px",
        
      }}
      onClick={goToLogin}
        >
     Volver
    </Button>
    <Button className='botones'variant="outline-success"
      type="submit"
      style={{
        backgroundColor: "#083045",
        fontSize: "20px",
        padding: "4px",
        margin: "5px",
        
      }}
        >
          Enviar
    </Button>
   
</div> 
</Form>
</Container>

</>
);
    }

export default ForgetPasswordForm;