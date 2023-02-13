import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';

// const LoginPage =() => {
//     return ( <h1> pagina de iniciar sesion <Link to="/register"> Registrarse </Link></h1>);

// }
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
         <Form.Control type="password" placeholder="Contraseña" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Recuerdame" />
       </Form.Group>
       <Button variant="primary" type="submit">
         Inicia Sesión
       </Button>
     </Form>
            
          </Modal.Body>
  
          <Modal.Footer>
            <p>O inicia sesión con:</p>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
  
  export default ModalIniciaSesion;
