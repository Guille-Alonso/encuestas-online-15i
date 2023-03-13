import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import GeneralModal from "../components/common/GeneralModal/GeneralModal";
import GeneralTable from "../components/common/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";
// import {axiosBack}from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hook/useGet";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import AddCategoryForm from "../components/AddCategoryForm/AddCategoryForm";
import EditCategoryForm from "../components/EditCategoryForm/EditCategoryForm";
import axios from "../config/axios";
import "../components/Styles/responsivesPages.css"
import {Button} from "@nextui-org/react";

const CategoryPage = () => {

    const [categories, loading, getCategories] = useGet('/categories',axios);
    const [selected,setSelected] =useState(undefined);
  
    const deleteCategory = async()=>{
      try {
        await axios.delete('/categories/',{data:{id:selected}});
        getCategories();
        toast.info("categoría borrada")
        setSelected(undefined)
      } catch (error) {
        if(!selected){
          toast.error('Selecciona a alguien bobo. Anda palla')
        }else{
          toast.error(ERROR_MESSAGE)
        }
      }
    }
  
    const navigate = useNavigate();
  
    const handleClick = ()=>{
      navigate('/admin')
    }
  
    return ( 
      <>
      <Container className="adminHeight">
        <h1>Página de Categorías</h1>
        <Row className="m-3">
          <Col className="d-flex justify-content-start">
          <Button className="mb-3 buttonPosition" css={{zIndex: 0}} shadow color="primary" auto flat onClick={handleClick}>Encuestas</Button>
          </Col>
          <Col className="d-flex justify-content-end">
          
            <GeneralModal
            buttonText='Añadir'
            modalTitle={'Añadir Categoría'}
            modalBody={<AddCategoryForm getCategories={getCategories}/>}
            variant="success"
            seleccion={true}
            />
            <GeneralModal
            buttonText='Editar'
            modalTitle={'Editar Categoría'}
            modalBody={<EditCategoryForm  selected={selected} getCategories={getCategories} setSelected={setSelected}/>}
            variant="warning"
            seleccion={selected}
            />
              <GeneralModal
            buttonText='Eliminar'
            modalTitle={'Eliminar Categoría'}
            modalBody={<DeleteConfirmation deleteFunction={deleteCategory}/>}
            variant="error"
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
              <GeneralTable headings={['id','Nombre','Estado']} items={categories} setSelected={setSelected} selected={selected}></GeneralTable>
            }
          </Col>
        </Row>
      </Container>
   <ToastContainer/>
      </>
     );
  }
 
export default CategoryPage;