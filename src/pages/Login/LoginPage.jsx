import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import { CloseButton } from "react-bootstrap";


function ModalIniciaSesion() {

    return  (
      <>
      
      <div class="loginpage-background-color ">   
      <div className="modal show" style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog  size="large"><div className="modal-background-color">
          <Modal.Header >
            <Modal.Title>Inicia Sesión</Modal.Title>
            <CloseButton />
          </Modal.Header>
  
          <Modal.Body>
            <LoginForm/>
                     
          </Modal.Body>
  
          </div> 
        </Modal.Dialog>
      </div>   </div>  
      
      </>
    )
  }

  export default ModalIniciaSesion ;
