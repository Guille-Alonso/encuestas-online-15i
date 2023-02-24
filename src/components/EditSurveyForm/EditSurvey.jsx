import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_QUESTION_VALUES, ADD_SURVEY_VALUES, ERROR_MESSAGE } from "../../constants";
import { SurveysContext } from "../../context/addSurveyContext";
import useForm from "../../hooks/useForm";
import useGet from "../../hooks/useGet";
import GeneralModal from "../common/GeneralModal/GeneralModal";
import GeneralTable from "../common/GeneralTable/GeneralTable";
import QuestionAndResponse from "../QuestionAndResponse/QuestionAndResponse";

const EditSurvey = ({onClose, selected, getSurveys, setSelected, categorias, goToAdmin}) => {
    const [questionsWithoutAnserws, loading, getData,setQuestionsWithoutAnserws] = useGet('/surveys/'+selected,axiosBack,selected);
    const {questionsA, setQuestionsA} = useContext(SurveysContext)
    const [selectedQuestion, setSelectedQuestion]= useState(undefined)
    const [questionEdit, setQuestionEdit] = useState(ADD_QUESTION_VALUES)

    // const [questions,setQuestions] = useState([]);

  const editSurvey = async()=>{
    try {

      const aux = {...values}
      aux.pregunta = questionsA
      await axiosBack.put('/surveys/'+selected,aux);
      
      getSurveys();
      toast.info('encuesta editada');
      setSelected(undefined)
      setQuestionsA([])
    
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }

  const {handleChange, handleSubmit,validated,values,setValues} = useForm(ADD_SURVEY_VALUES,editSurvey,onClose,goToAdmin);
 
  const getSurveyInfo = async ()=>{
    try {
      const {data} = await axiosBack.get('/surveys/'+selected);
      
     setValues(data);
 console.log(data);
    setQuestionsA(data.pregunta)
   
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const removeQuestion = ()=>{
    if(selectedQuestion){
       
      const questionsFilter = questionsWithoutAnserws.filter(q=>q.id !== selectedQuestion)
      const questions = questionsA.filter(q=>q.id !== selectedQuestion)
      setQuestionsA(questions)
        setQuestionsWithoutAnserws(questionsFilter)
        setSelectedQuestion(undefined)
    }else toast.error("debes seleccionar una pregunta")
   
  }
  
  useEffect(()=>{
    getSurveyInfo();
    
  },[])

useEffect(()=>{
  const questionAux = questionsA.find(q=>q.id==selectedQuestion)
   setQuestionEdit(questionAux)
},[selectedQuestion])

useEffect(()=>{
  let aux=[]
  for (let index = 0; index < questionsA.length; index++) {
      
    let {responses, ...res} = questionsA[index];
    aux.push(res)
  }
setQuestionsWithoutAnserws(aux)
},[questionsA])

   return (<>
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idEncuesta">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          onChange={handleChange}
          value={values.id}
          name="id"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="NombreEncuesta">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control
          required
          type="text"
          onChange={handleChange}
          value={values.name}
          name="name"
          maxLength={25}
          minLength={4}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="CategoriaEncuesta">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          onChange={handleChange}
          value={values.categoria}
          name="categoria"
        >
          {categorias.map((item) => {
            if (item.state == "Disponible") {
              return <option key={item.id}>{item.name}</option>;
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
          <option>Activa</option>
          <option>Inactiva</option>
          <option>Pendiente</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="RespuestasPorPersonaEncuesta">
        <Form.Label>Una Respuesta Por Persona</Form.Label>
        <Form.Select
          onChange={handleChange}
          value={values.unaRespuestaPorPersona}
          name="unaRespuestaPorPersona"
        >
          <option>Activado</option>
          <option>Desactivado</option>
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
         <Button variant="danger" onClick={removeQuestion}>Quitar</Button> 
    </div>
      
        {
          loading?
            <Spinner/>
          :
         
        <GeneralTable headings={['id','Pregunta','Tipo de Respuesta']} items={questionsWithoutAnserws} setSelected={setSelectedQuestion} selected={selectedQuestion}></GeneralTable>
    
        }

      <Button variant="success" type="submit">
        Guardar Cambios
      </Button>
    </Form>
    </>  );
}
 
export default EditSurvey;<>


</>