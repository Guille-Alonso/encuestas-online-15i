import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ForgetPassword() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¿Has olvidado tu contraseña?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Introduce el email que utilizaste para registrate debajo y pulsa Enviar.  En pocos minutos recibirás un email para obtener una nueva contraseña.</p>
       
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Volver</Button>
          <Button variant="primary">Enviar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
 
export default ForgetPassword;