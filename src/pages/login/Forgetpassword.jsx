import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import "../login/login.css"
import { useNavigate } from 'react-router';


function ForgetPassword() {

  const navigate = useNavigate()

  const toLogin = ()=>{
    navigate('/login')
  }
  return (
    <>
    
       <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Form>
      <Modal.Dialog  ><div className="modal-background-color">
        <Modal.Header closeButton>
          <Modal.Title>¿Has olvidado tu contraseña?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
      
      <p>Introduce el email que utilizaste para registrate debajo y pulsa Enviar.  En pocos minutos recibirás un email para obtener una nueva contraseña.</p>
          
          <Form.Group style={{ width: "auto" }}>
          
          <Form.Control type="email" 
           placeholder="@"
           aria-label="Small"
           required
          />
        </Form.Group>
   
      
       
       </Modal.Body>

        <Modal.Footer>
          <Button onClick={toLogin} variant="success">Volver</Button>
          <Button variant="primary" type='submit'>Enviar</Button>
        </Modal.Footer> 
        </div>
      </Modal.Dialog> 
      </Form>
    </div> </>
  );
}
 
export default ForgetPassword;