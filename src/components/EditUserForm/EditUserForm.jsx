import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_USER_VALUES, ERROR_MESSAGE } from "../../constants";
import useForm from "../../hooks/useForm";

const EditUserForm = ({onClose, selected, getUsers, setSelected}) => {
const [valores,setValores] = useState(ADD_USER_VALUES)

  const editUser = async()=>{
    try {
      await axiosBack.put('/users/'+selected,valores);
      getUsers();
      toast.info('Usuario editado');
      setSelected(undefined)
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }

//con lo de abajo es para cargar la info existente del usuario en el modal
  const getUserInfo = async ()=>{
    try {
      const {data} = await axiosBack.get('/users/'+selected);
      console.log(data);
     setValores(data)
     
      
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }
  
  useEffect(()=>{
    getUserInfo()
  },[])

  //
  const {handleChange, handleSubmit} = useForm(editUser,valores, setValores);

  //con lo de arriba se modifica concretamente el usuario
  
  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idUser">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text"  onChange={handleChange} value={valores.id} name='id'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nombre del usuario</Form.Label>
        <Form.Control type="text"  onChange={handleChange} value={valores.name} name='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Rol</Form.Label>
        <Form.Control type="text"  onChange={handleChange} value={valores.role} name='role'/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={onClose}>
        Editar
      </Button>
    </Form>
  );
}
 
export default EditUserForm;