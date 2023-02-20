import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";

import { toast} from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_SURVEY_VALUES } from "../../constants/index";
import useForm from "../../hooks/useForm";
import QuestionAndResponse from "../QuestionAndResponse/QuestionAndResponse";

const AddSurveyForm = ({onClose, getSurveys, categorias,goToAdmin}) => {
  const [values, setValues] = useState(ADD_SURVEY_VALUES);

  const addSurvey = async()=>{
    try {
      await axiosBack.post('/surveys',values);
      getSurveys();
      toast.info('encuesta creada');
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }
 
  const {handleChange, handleSubmit, validated} = useForm(addSurvey,values,setValues,onClose,goToAdmin)

  return ( 
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idEncuesta">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un id" onChange={handleChange} value={values.id} name='id'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="NombreEncuesta">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control required type="text" placeholder="popular" onChange={handleChange} value={values.name} name='name' maxLength={25} minLength={4}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="CategoriaEncuesta">
        <Form.Label>Categoría</Form.Label>
        <Form.Select required onChange={handleChange} value={values.categoria} name="categoria">
        <option value="">Elija una opción :</option>
          {
            categorias.map(item  => 
            {
              if(item.state=="Disponible"){
                return     <option key={item.id} >{item.name}</option>
              }
            })
          }
    
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="EstadoEncuesta">    
        <Form.Label>Estado</Form.Label>
     
        <Form.Check 

            onChange={handleChange} 
            type="radio"
            id="1"
            name="estado"
            label="Activa"
            value="Activa"
            required
          />
           <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="2"
            name="estado"
            label="Inactiva"
            value="Inactiva"
            required
          />
           <Form.Check 
       
            onChange={handleChange} 
            type="radio"
            id="3"
            name="estado"
            label="Pendiente"
            value="Pendiente"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="UnaRespuestaPorPersonaEncuesta">  
        <Form.Label>Una Respuesta por Persona</Form.Label>
        <Form.Check 
            onChange={handleChange} 
           
            type="radio"
            id="4"
            name="unaRespuestaPorPersona"
            label="Activado"
            value="Activado"
            required
          />
           <Form.Check 
       
            onChange={handleChange} 
            type="radio"
            id="5"
            name="unaRespuestaPorPersona"
            label="Desactivado"
            value="Desactivado"
            required
          />
        </Form.Group>
      <QuestionAndResponse  handleChange={handleChange} values={values}/>
        
      <a href="">Nueva pregunta +</a>
      <br></br>
      <br></br>
      <Button variant="success" type="submit">
        Agregar
      </Button>
    </Form>
  
</>
  );
}
 
export default AddSurveyForm;