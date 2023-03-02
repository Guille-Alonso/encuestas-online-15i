import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast ,ToastContainer} from "react-toastify";
import AddSurveyForm from "../components/AddSurveyForm/AddSurveyForm";
import axios from "../config/axios";
import { SurveysContext } from "../context/addSurveyContext";
import useGet from "../hooks/useGet";
import SurveyPage from "./SurveyPage";

const SendSurvey = () => {
    const {userRegister,setUserRegister} = useContext(SurveysContext)
    const [surveys, loading, getSurveys] = useGet('/surveys',axios);
    const [categorias, setCategorias] = useState([])
    const [selected,setSelected] =useState(undefined);
    const [state,setState] = useState(false)

    const getCategories = async()=>{
   
        try {
          const cats = await axios('/categories');
           setCategorias(cats.data)
          
        } catch (error) {
          toast.error('Error al buscar los datos')
        }
      }
    
      useEffect(()=>{
     
            getCategories()
      
        
      },[])

    return (  
<div className="layout">
    <h1>Bienvenidos a la pagina principal de encuestas online</h1>

    {
        userRegister && 
        <>
        <button onClick={()=>setState(true)}>agregar encuesta</button>
        {
            state &&
        <Container>
          <Row>
            <Col>
     
                <SurveyPage modo={<AddSurveyForm getSurveys={getSurveys} categorias = {categorias} setSelected={setSelected} selected={selected} client={true}/>}/>
            </Col>
          </Row>
          <ToastContainer/>
        </Container>
        }
        </>
    }
       
</div>
    );
}
 
export default SendSurvey;