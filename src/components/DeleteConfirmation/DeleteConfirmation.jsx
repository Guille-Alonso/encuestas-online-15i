import { Button } from "react-bootstrap";

const DeleteConfirmation = ({onClose, deleteFunction}) => {

  const handleDelete = ()=>{
    deleteFunction();
    onClose();
  }
  return ( 
    <>
      <p> Estas seguro que deseas eliminar este elemento?</p>
      <div className="d-flex">
      <Button variant="danger" className="d-flex me-2" onClick={handleDelete}> Confirmar </Button>
      <Button onClick={onClose}> Cancelar </Button>
      </div>
      
    </>
  );
}
 
export default DeleteConfirmation;