import { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import AddUserForm from "../components/AddUserForm/AddUserForm";
import GeneralModal from "../components/common/GeneralModal/GeneralModal";
import GeneralTable from "../components/common/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";
import EditUserForm from "../components/EditUserForm/EditUserForm";
import {axiosBack}from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [users, loading, getUsers] = useGet('/users',axiosBack);
  const [selected,setSelected] =useState(undefined);

  const deleteUser = async()=>{
    try {
      await axiosBack.delete('/users/'+ selected);
      getUsers();
      toast.info("usuario borrado")
      setSelected(undefined)
    } catch (error) {
      if(!selected){
        toast.error('Selecciona a alguien bobo. Anda palla')
      }else{
        toast.error(ERROR_MESSAGE)
      }
    }
  }

  return ( 
    <>
    <Container>
      <h1>Página de administración</h1>
      <Row className="m-3">
        <Col className="d-flex justify-content-end">
          <GeneralModal
          buttonText='Añadir usuario'
          modalTitle={'Añadir usuario'}
          modalBody={<AddUserForm getUsers={getUsers}/>}
          variant="success"
          seleccion={true}
          />
          <GeneralModal
          buttonText='Eliminar usuario'
          modalTitle={'Eliminar usuario'}
          modalBody={<DeleteConfirmation deleteFunction={deleteUser}/>}
          variant="danger"
          seleccion={selected}
          />
          <GeneralModal
          buttonText='Editar usuario'
          modalTitle={'Editar usuario'}
          modalBody={<EditUserForm selected={selected} getUsers={getUsers} setSelected = {setSelected}/>}
          variant="warning"
          seleccion={selected}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {
          loading?
            <Spinner/>
          :
            <GeneralTable headings={['id','Nombre','Rol']} items={users} setSelected={setSelected} selected={selected}></GeneralTable>
          }
        </Col>
      </Row>
    </Container>
 <ToastContainer/>
    </>
   );
}
 
export default AdminPage;