import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"


function ModalIniciaSesion() {

    const [modalshow, setModalShow] = useState(false);
    
    
    return  (
      <>
      
      <body >
  
      <div className="modal show, loginpage-background-color" style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog  size="large"><div className="modal-background-color">
        <Modal.Header  closeButton onClick="" >
        <Modal.Title >Inicia Sesión</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
        <LoginForm/>
                     
          </Modal.Body>
  
          </div> 
        </Modal.Dialog>
        </div>  

        
      </body>
    
      
      
      </>
    )
  }

  export default ModalIniciaSesion ;
