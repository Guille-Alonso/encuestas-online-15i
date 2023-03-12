import { useContext, useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Spinner,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import { ADD_QUESTION_VALUES, ADD_SURVEY_VALUES, ERROR_MESSAGE } from "../../constants";
import { SurveysContext } from "../../context/addSurveyContext";
import useForm from "../../hook/useForm";
import useGet from "../../hook/useGet";
import GeneralModal from "../common/GeneralModal/GeneralModal";
import GeneralTable from "../common/GeneralTable/GeneralTable";
import QuestionAndResponse from "../QuestionAndResponse/QuestionAndResponse";
import { validationNames } from "../../helpers/validationsNames";
import {Button} from "@nextui-org/react";

const EditSurvey = ({onClose, selected, getSurveys, setSelected, categorias, goToAdmin}) => {
    const [questionsWithoutAnserws, loading, getData,setQuestionsWithoutAnserws] = useGet('/surveys/'+selected,axios,selected);
    const {questionsA, setQuestionsA} = useContext(SurveysContext)
    const [selectedQuestion, setSelectedQuestion]= useState(undefined)
    const [questionEdit, setQuestionEdit] = useState(ADD_QUESTION_VALUES)

  const editSurvey = async()=>{
    try {
   
      const aux = {...values}
      aux.pregunta = questionsA
      const obj = {
        "id":values._id,
        "campos":aux
    }
   
      await axios.put('/surveys/',obj);
      
      getSurveys();
      toast.info('encuesta editada');
      setSelected(undefined)
      setQuestionsA([])
    
    } catch (error) {
      setQuestionsA([])
    	if(error.response.data.errors){
        toast.error(error.response.data.errors[0].msg)
      
      }else toast.error(error.message)
    }
  }

  const {handleChange, handleSubmit,values,setValues,errors} = useForm(ADD_SURVEY_VALUES,editSurvey,onClose,goToAdmin,validationNames);
 
  const getSurveyInfo = async ()=>{
    try {
      const {data} = await axios.get('/surveys/'+selected);
    
     setValues(data.survey);
 
    setQuestionsA(data.survey.pregunta)
   
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const removeQuestion = ()=>{
    if(selectedQuestion){
       
      const questionsFilter = questionsWithoutAnserws.filter(q=>q._id !== selectedQuestion)
      const questions = questionsA.filter(q=>q._id !== selectedQuestion)
      setQuestionsA(questions)
        setQuestionsWithoutAnserws(questionsFilter)
        setSelectedQuestion(undefined)
    }else toast.error("debes seleccionar una pregunta")
   
  }
  
  useEffect(()=>{
    getSurveyInfo();
    
  },[])

useEffect(()=>{
  const questionAux = questionsA?.find(q=>q._id==selectedQuestion)
   setQuestionEdit(questionAux)
},[selectedQuestion])

useEffect(()=>{
  let aux=[]
  for (let index = 0; index < questionsA?.length; index++) {
      
    let {responses, ...res} = questionsA[index];
    aux.push(res)
  }
setQuestionsWithoutAnserws(aux)
},[questionsA])

   return (<>
    
    <Form onSubmit={handleSubmit}>
    
      <Form.Group className="mb-3" controlId="NombreEncuesta">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control
          required
          type="text"
          onChange={handleChange}
          value={values.name}
          name="name"
          maxLength={35}
          minLength={4}
        />
          {Object.keys(errors).length !== 0 &&
          Object.values(errors).map((error, index) => (
            <Alert variant="danger" className="mt-3" key={index}>
              {error}
            </Alert>
          ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="CategoriaEncuesta">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          onChange={handleChange}
          value={values.categoria?._id}
          name="categoria"
        >
          {categorias.map((item) => {
            if (item.state) {
              return <option key={item._id} value={item._id}>{item.name}</option>;
            }
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="EstadoEncuesta">
        <Form.Label>Estado</Form.Label>
        <Form.Select
          onChange={handleChange}
          value={values.estado}
          name="estado"
        >
          <option value="activa" >activa</option>
          <option value="inactiva" >inactiva</option>
          <option value="pendiente">pendiente</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="RespuestasPorPersonaEncuesta">
        <Form.Label>Una Respuesta Por Persona</Form.Label>
        <Form.Select
          onChange={handleChange}
          value={values.unaRespuestaPorPersona}
          name="unaRespuestaPorPersona"
        >
          <option value={true}>Activado</option>
          <option value={false}>Desactivado</option>
        </Form.Select>
      </Form.Group>

    <div className="d-flex justify-content-end mb-1">
    <GeneralModal
          buttonText='Agregar'
          modalTitle={'Agregar Pregunta'}
          modalBody={<QuestionAndResponse onClose={onClose}/>}
          variant="success"
          seleccion={selected}
          />
    <GeneralModal
          buttonText='Editar'
          modalTitle={'Editar Pregunta'}
          modalBody={<QuestionAndResponse itemQuestion={questionEdit} onClose={onClose} setSelectedQuestion={setSelectedQuestion}/>}
          variant="warning"
          seleccion={selectedQuestion}
          />
         <Button variant="danger" className="ms-2" color="error" auto flat onClick={removeQuestion}>Quitar</Button> 
    </div>
      
        {
          loading?
            <Spinner/>
          :
         
        <GeneralTable headings={['id','Pregunta','Tipo de Respuesta']} items={questionsWithoutAnserws} setSelected={setSelectedQuestion} selected={selectedQuestion}></GeneralTable>
    
        }

      <Button className="d-flex mb-2" color="warning" auto flat type="submit">
        Guardar Cambios
      </Button>
    </Form>
    </>  );
}
 
export default EditSurvey;