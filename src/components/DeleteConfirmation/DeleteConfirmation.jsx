import { Button } from "react-bootstrap";

const DeleteConfirmation = ({onClose, deleteFunction}) => {

  const handleDelete = ()=>{
    deleteFunction();
    onClose();
  }
  return ( 
    <>
      <p> Estas seguro que deseas eliminar este elemento</p>
      <Button variant="success" onClick={handleDelete}> Confirmar </Button>
      <Button variant="danger" onClick={onClose}> Cancelar </Button>
    </>
  );
}
 
export default DeleteConfirmation;