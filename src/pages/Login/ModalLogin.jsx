import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import { CloseButton } from "react-bootstrap";
import "./Modal.css";

function ModalLogin() {

    return  (
         
      <div className="modal show" style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog  size="sm">
        <div className="modal-background-color">
          <Modal.Header>
            <Modal.Title>Inicia Sesión</Modal.Title>
            <CloseButton />
          </Modal.Header>
          <Modal.Body>
            <LoginForm/>
                     
          </Modal.Body>
  
          </div> 
        </Modal.Dialog>
      
        </div>
        
 
    )
  }

  export default ModalLogin ;
