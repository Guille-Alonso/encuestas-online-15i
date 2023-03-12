
import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { Form,Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast} from "react-toastify";
import axios from "../../config/axios";
import { ADD_SURVEY_VALUES } from "../../constants/index";
import { SurveysContext } from "../../context/addSurveyContext";
import useForm from "../../hook/useForm";
import GeneralTable from "../common/GeneralTable/GeneralTable";
import QuestionAndResponse from "../QuestionAndResponse/QuestionAndResponse";
import { validationNames } from "../../helpers/validationsNames";
import {Button} from "@nextui-org/react";

const AddSurveyForm = ({onClose, getSurveys, categorias,goToAdmin,setSelected, selected, client}) => {

 
  const {questionsA, setQuestionsA, flagQuestion, setFlagQuestion,user} = useContext(SurveysContext)
  const [aux, setAux] = useState([])


  const addSurvey = async()=>{
    try {
      const auxSurvey = {...values}
      auxSurvey.user = user._id;
      auxSurvey.pregunta = questionsA
  
      await axios.post('/surveys',auxSurvey);
      if(getSurveys){
        getSurveys();
      }
      
      if(client){
        toast.info('Su encuesta será evaluada..');
      }else  toast.success('encuesta creada');
     
      setSelected(undefined)
      setQuestionsA([])
    } catch (error) {
      setQuestionsA([])
      if(error.response.data.errors){
        toast.error(error.response.data.errors[0].msg)
      
      }else toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(questionsA.length>0){
    setQuestionsA([])
    }
    },[])

  const removeQuestionAdd = ()=>{
    if(selected){
     
      setFlagQuestion(false)
      const questionsFiltered = aux.filter(q=>q._id !== selected)
      const questions = questionsA.filter(q=>q._id !== selected)
      setQuestionsA(questions)
      setAux(questionsFiltered)
    
      setSelected(undefined)
      
    }else toast.error("debes seleccionar una pregunta")
   
  }

  const loadQuestionsAdd = ()=>{
    
    
      for (let index = 0; index < questionsA.length; index++) {
    
        let {responses, ...resto} = questionsA[index];
        setAux([...aux, resto])
      }
    
    
  }

  useEffect(()=>{
  if(flagQuestion){
    loadQuestionsAdd();
  }
   

  },[questionsA])
 
  const {handleChange, handleSubmit,values, errors} = useForm(ADD_SURVEY_VALUES,addSurvey,onClose,goToAdmin,validationNames)

  return ( 
    <>
    <Form onSubmit={handleSubmit}>
   
      <Form.Group className="mb-3" controlId="NombreEncuesta">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control required type="text" placeholder="popular" onChange={handleChange} value={values.name} name='name' maxLength={35} minLength={4}/>
        {Object.keys(errors).length !== 0 &&
          Object.values(errors).map((error, index) => (
            <Alert variant="danger" className="mt-3" key={index}>
              {error}
            </Alert>
          ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="CategoriaEncuesta">
        <Form.Label>Categoría</Form.Label>
        <Form.Select required onChange={handleChange} name="categoria">
        <option value="">Elija una opción :</option>
          {
            categorias.map(item  => 
            {
              if(item.state){
                return     <option key={item.id} value={item._id} >{item.name}</option>
              }
            })
          }
    
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="EstadoEncuesta">    
        <Form.Label>Estado</Form.Label>
     {
      client?
      <Form.Check 
       
      onChange={handleChange} 
      type="radio"
      id="3"
      name="estado"
      label="pendiente"
      value="pendiente"
      required
      
      
    />
    :
     <>
        <Form.Check 

            onChange={handleChange} 
            type="radio"
            id="1"
            name="estado"
            label="activa"
            value="activa"
            required
          />
           <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="2"
            name="estado"
            label="inactiva"
            value="inactiva"
            required
          />
           <Form.Check 
       
            onChange={handleChange} 
            type="radio"
            id="3"
            name="estado"
            label="pendiente"
            value="pendiente"
            required
          />
          </>
     }
        </Form.Group>
        <Form.Group className="mb-3" controlId="UnaRespuestaPorPersonaEncuesta">  
        <Form.Label>Una Respuesta por Persona</Form.Label>
        <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="4"
            name="unaRespuestaPorPersona"
            label="Activado"
            value={true}
            required
          />
           <Form.Check 
       
            onChange={handleChange} 
            type="radio"
            id="5"
            name="unaRespuestaPorPersona"
            label="Desactivado"
            value={false}
            required
          />
        </Form.Group>
        
      
            <QuestionAndResponse />
            {
               aux.length > 0 &&   <Button className="d-flex ms-auto mb-1"  shadow color="secondary" auto flat onClick={removeQuestionAdd}>Quitar</Button>
            }
          
        
     
        
          {
         
            aux.length > 0 && <GeneralTable headings={['id','Pregunta','Tipo de Respuesta']} items={aux} setSelected={setSelected} selected={selected}></GeneralTable>
          }

      <br></br>
      <Button className="d-flex mb-2" color="success" auto flat variant="success" type="submit" >
        Agregar
      </Button>
    </Form>
  
</>
  );
}
 
export default AddSurveyForm;