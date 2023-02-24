import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_SURVEY_VALUES, ERROR_MESSAGE } from "../../constants";
import { SurveysContext } from "../../context/addSurveyContext";
import useForm from "../../hooks/useForm";
import QuestionAndResponse from "../QuestionAndResponse/QuestionAndResponse";

const EditSurveyForm = ({onClose, selected, getSurveys, setSelected, categorias, goToAdmin}) => {

const {questionsA, setQuestionsA} = useContext(SurveysContext)
const [questions,setQuestions] = useState([]);
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
    
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }
  
  useEffect(()=>{
    getSurveyInfo();
  },[])

  
  const addQuestions = ()=>{
    setQuestions([...questions, `pregunta${questions.length + 1}`])
    console.log(questions);
  }

  const removeQuestion = ()=>{
    const newArray = questions.filter(item=> item !=`pregunta${questions.length}`)
    setQuestions(newArray);
  }

  return (
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
      {values.pregunta.map((item,index) => (
        <QuestionAndResponse key={index} itemQuestion={item} values={values} setValues={setValues} indice={item.id}/>
      ))}
      <br />
      {
        questions.map((item,index)=>(
          <QuestionAndResponse key={index} values={values} setValues={setValues} indice={true}/>
        ))
      }
    <Link onClick={addQuestions}>Nueva pregunta</Link>
    <br />
    <Link onClick={removeQuestion}>borrar pregunta</Link>
      <br />
      <Button variant="success" type="submit">
        Editar
      </Button>
    </Form>
  );
}
 
export default EditSurveyForm;