import { useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { SurveysContext } from "../context/addSurveyContext";
import useGet from "../hook/useGet";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast ,ToastContainer} from "react-toastify";
import AddSurveyForm from "../components/AddSurveyForm/AddSurveyForm";
import SurveyPage from "./SurveyPage";

const AddSurveyUserPage = () => {
    const {user} = useContext(SurveysContext)
    const [categorias] = useGet('/categories',axios);
    // const [categorias, setCategorias] = useState([])
    const [selected,setSelected] =useState(undefined);
  

    // const getCategories = async()=>{
   
    //     try {
    //       const {data} = await axios('/categories');
    //        setCategorias(data.categories)
        
          
    //     } catch (error) {
    //       toast.error('Error al buscar los datos')
    //     }
    //   }
    
    //   useEffect(()=>{
     
    //         getCategories()
      
        
    //   },[])

    return (  
<div className="layout">
    <h1>Bienvenido a la pagina para proponer una encuesta</h1>

    {
        user && 
        <>
     
        <Container>
          <Row>
            <Col>
     
                <SurveyPage modo={<AddSurveyForm  categorias = {categorias} setSelected={setSelected} selected={selected} client={true}/>}/>
            </Col>
          </Row>
          <ToastContainer/>
        </Container>
       
        </>
    }
       
</div>
    );
}
 
export default AddSurveyUserPage;