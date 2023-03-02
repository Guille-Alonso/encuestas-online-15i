import { useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { SurveysContext } from "../context/addSurveyContext";
import useGet from "../hook/useGet";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast ,ToastContainer} from "react-toastify";
import AddSurveyForm from "../components/AddSurveyForm/AddSurveyForm";
import SurveyPage from "./SurveyPage";

const AddSurveyUserPage = () => {
    const {userRegister,setUserRegister} = useContext(SurveysContext)
    const [surveys, loading, getSurveys] = useGet('/surveys',axios);
    const [categorias, setCategorias] = useState([])
    const [selected,setSelected] =useState(undefined);
    const [state,setState] = useState(false)

    const getCategories = async()=>{
   
        try {
          const {data} = await axios('/categories');
           setCategorias(data.categories)
          
        } catch (error) {
          toast.error('Error al buscar los datos')
        }
      }
    
      useEffect(()=>{
     
            getCategories()
      
        
      },[])

    return (  
<div className="layout">
    <h1>Bienvenido a la pagina para proponer una encuesta</h1>

    {
        userRegister && 
        <>
        {/* <Button variant='success' onClick={()=>setState(true)}>agregar encuesta</Button>
        {
            state && */}
        <Container>
          <Row>
            <Col>
     
                <SurveyPage modo={<AddSurveyForm getSurveys={getSurveys} categorias = {categorias} setSelected={setSelected} selected={selected} client={true}/>}/>
            </Col>
          </Row>
          <ToastContainer/>
        </Container>
        {/* } */}
        </>
    }
       
</div>
    );
}
 
export default AddSurveyUserPage;