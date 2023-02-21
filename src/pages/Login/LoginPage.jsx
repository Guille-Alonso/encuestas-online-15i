import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';



function ModalIniciaSesion() {

    const [show, setShow] = useState(false);
    return  (
      <>
      
      <div class="loginpage-background-color ">   
      <div className="modal show" style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog  size="large"><div className="modal-background-color">
        <Modal.Header closeButton>
        <Modal.Title>Inicia Sesión</Modal.Title>
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
