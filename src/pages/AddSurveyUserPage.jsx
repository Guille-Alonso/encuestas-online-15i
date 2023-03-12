import { useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { SurveysContext } from "../context/addSurveyContext";
import useGet from "../hook/useGet";
import { Col, Container, Row } from "react-bootstrap";
import { toast ,ToastContainer} from "react-toastify";
import AddSurveyForm from "../components/AddSurveyForm/AddSurveyForm";
import SurveyPage from "./SurveyPage";
import { useNavigate } from "react-router";
import {Button} from "@nextui-org/react";

const AddSurveyUserPage = () => {
    const {user} = useContext(SurveysContext)
    const [categorias] = useGet('/categories',axios);
    const [selected,setSelected] =useState(undefined);

    const navigate = useNavigate()
    const goToSurveys=()=>{
        navigate('/home')
    }
  
    return (  
<div className="layout">

    {
        user && 
        <>
     
        <Container>
            <Row>
            <Col>
                <Button className="d-flex my-3 ms-auto" shadow color="primary" auto flat onClick={goToSurveys}>Volver</Button>
            </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                <h1>Proponga una Encuesta</h1>
                </Col>
            </Row>
          <Row>
            <Col>
     
                <SurveyPage modo={<AddSurveyForm goToAdmin={goToSurveys} categorias = {categorias} setSelected={setSelected} selected={selected} client={true}/>}/>
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