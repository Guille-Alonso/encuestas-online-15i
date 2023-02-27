import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import AddSurveyForm from "../components/AddSurveyForm/AddSurveyForm";
import GeneralModal from "../components/common/GeneralModal/GeneralModal";
import GeneralTable from "../components/common/GeneralTable/GeneralTable";
import DeleteConfirmation from "../components/DeleteConfirmation/DeleteConfirmation";
import {axiosBack}from "../config/axios";
import { ERROR_MESSAGE } from "../constants";
import useGet from "../hooks/useGet";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";
import SurveyPage from "./SurveyPage";
import EditSurvey from "../components/EditSurveyForm/EditSurvey";

const AdminPage = () => {
  const [surveys, loading, getSurveys] = useGet('/surveys',axiosBack);
  const [selected,setSelected] =useState(undefined);
  const [categorias, setCategorias] = useState([])
  const [survey,setSurvey] = useState('')


  const deleteSurvey = async()=>{
    try {
      await axiosBack.delete('/surveys/'+ selected);
      getSurveys();
      toast.info("encuesta borrada")
      setSelected(undefined)
    } catch (error) {
      if(!selected){
        toast.error('Selecciona un elemento.')
      }else{
        toast.error(ERROR_MESSAGE)
      }
    }
  }

  const navigate = useNavigate();

  const aCategorías = ()=>{
    navigate('/categoryPage')
  }

  const cargarFormularioDeEncuesta = (mode)=>{
    if(selected && mode == "editar"){
      setSurvey(mode);
    }else if(mode=="agregar"){
      setSurvey(mode);
    }else if(mode == "editar" && !selected){
      toast.error("debes seleccionar un elemento")
    }
  }

  const goToAdmin = ()=>{
   setSurvey('')
  // window.location.reload()
  
  }

  const goToSurveys = ()=>{
    window.location.reload()
  }
  const getCategories = async()=>{
    try {
      const cats = await axiosBack('/categories');
       setCategorias(cats.data)
      
    } catch (error) {
      toast.error('Error al buscar los datos')
    }
  }

  useEffect(()=>{
    getCategories();
   
  },[])

  return ( 
    <>
    {
    survey==''?
      
    <Container>
      <h1>Página de administración</h1>
      <Row className="m-3">
        <Col className="d-flex justify-content-start">
        <Button onClick={aCategorías}>Categorías</Button>
        </Col>
        <Col className="d-flex justify-content-end">

        <Button className="me-2" variant="success" onClick={()=>cargarFormularioDeEncuesta('agregar')}>Añadir Encuesta</Button>
          <GeneralModal
          buttonText='Eliminar Encuesta'
          modalTitle={'Eliminar Encuesta'}
          modalBody={<DeleteConfirmation deleteFunction={deleteSurvey}/>}
          variant="danger"
          seleccion={selected}
          />
          
           <Button variant="warning" onClick={()=>cargarFormularioDeEncuesta('editar')}>Editar Encuesta</Button>
       
        </Col>
      </Row>
      <Row>
        <Col>
          {
          loading?
            <Spinner/>
          :
            <GeneralTable headings={['id','Nombre','Categoría','Estado','Una Respuesta']} items={surveys} setSelected={setSelected} selected={selected}></GeneralTable>
          }           
        </Col>
      </Row>
  
    </Container>
     
     :selected && survey=='editar'?
     
    <Container>
      <Row>
        <Col>
            <Col className="d-flex justify-content-end">
                <Button onClick={goToSurveys}>Encuestas</Button>
               
            </Col>
    
            <SurveyPage modo={<EditSurvey selected={selected} getSurveys={getSurveys} setSelected = {setSelected} categorias = {categorias} goToAdmin={goToAdmin}/>}/>
    
        </Col>
      </Row>
    </Container>
    : 
    <Container>
      <Row>
        <Col>
        <Col className="d-flex justify-content-end">
          <Button onClick={goToSurveys}>Encuestas</Button>
        </Col>
            <SurveyPage modo={<AddSurveyForm getSurveys={getSurveys} categorias = {categorias} goToAdmin={goToAdmin} setSelected={setSelected} selected={selected}/>}/>
        </Col>
      </Row>
    </Container>
    
}
 <ToastContainer/>
    </>
   );
}
 
export default AdminPage;