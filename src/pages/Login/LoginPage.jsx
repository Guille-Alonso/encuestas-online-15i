import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalIniciaSesion() {
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Inicia Sesión</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
         <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa un Correo" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
         </Form.Text>
       </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label>Contraseña</Form.Label>
         <Form.Control type="password" placeholder="Contraseña" />
       </Form.Group>
       <Form.Group className="d-flex justify-content-between" controlId="loginCheckbox">
       <Form.Check type="switch" label="Recuérdame" />
        
        <Link to="/ForgetPassword">¿Has olvidado tu contraseña?</Link>
       </Form.Group>
       <div className="d-grid gap-2">
       <Button variant="primary" size="l" type="submit">Inicia Sesión</Button></div>
     </Form>
            
          </Modal.Body>
  
          <Modal.Footer>
            <h9>O inicia sesión con:</h9>
            <Button variant="info">Facebook</Button>
            <Button variant="danger">Google</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  
  export default ModalIniciaSesion;
