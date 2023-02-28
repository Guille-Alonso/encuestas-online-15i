import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import "../../pages/Login/LoginPage.css";
import { Link } from 'react-router-dom';



const ForgetPasswordForm =()=>{
  return(
    <>
   <div className="modal-background-color d-flex flex-column mb-3  justify-content-center">
        
        <Modal.Title className='d-flex  justify-content-center'>¿Has olvidado tu contraseña?</Modal.Title>
        <div className='d-flex  justify-content-center'>
             <p>Introduce el email que utilizaste para registrate debajo y pulsa Enviar.  En pocos minutos recibirás un email para obtener una nueva contraseña.</p>
        </div>
        <div className='d-flex  justify-content-center mb-2'>
        <Form.Group className='d-flex  justify-content-center' style={{ width: "45%", display:"flex", alignItems:"center" }}>
        <Form.Control  name= "email" type="email" placeholder="Ingresa tu email" />
      </Form.Group>
 </div> 
 <div className='d-flex  justify-content-center mb-4'>
<Button onClick={"/HomePage"} variant="outline-success"
      type="submit"
      style={{
        backgroundColor: "#083045",
        fontSize: "20px",
        padding: "4px 4px",
      }}
        >
     Volver
    </Button>
    <Button variant="outline-success"
      type="submit"
      style={{
        backgroundColor: "#083045",
        fontSize: "20px",
        padding: "4px 4px",
      }}
        >
          Enviar
    </Button>
    
</div> 
</div>

</>
);
    }

export default ForgetPasswordForm;