import { cloneElement, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast} from "react-toastify";
import {Button} from "@nextui-org/react";

const GeneralModal = ({buttonText, modalTitle, modalBody, variant, seleccion}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleShow = ()=>{
    if(seleccion) setShow(true)
    else  toast.error("debes seleccionar un elemento")
  }

  return (
    <>

      <Button color={variant} auto flat onClick={handleShow} className="mx-2">
        {buttonText}
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static" 
      keyboard={false}
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cloneElement(modalBody,{onClose:handleClose})}</Modal.Body>
        {/* en modalBody ya viene AddUserForm con la props de los usuarios (desde AdminPage) y con el cloneElement le 
        agregamos una props mas al AddUserForm (q es la porps q le faltaba, la del evento para cerrar el modal) MISMO
        CASO PARA EDIT Y DELETE PQ ESTE MODAL ES GRAL */}
      </Modal>

    </>
  );
}
 
export default GeneralModal;