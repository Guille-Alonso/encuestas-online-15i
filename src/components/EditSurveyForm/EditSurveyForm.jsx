import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_SURVEY_VALUES, ERROR_MESSAGE } from "../../constants";
import useForm from "../../hooks/useForm";

const EditSurveyForm = ({onClose, selected, getSurveys, setSelected, categorias, goToAdmin}) => {
const [valores,setValores] = useState(ADD_SURVEY_VALUES)

  const editSurvey = async()=>{
    try {
      await axiosBack.put('/surveys/'+selected,valores);
      getSurveys();
      toast.info('encuesta editada');
      setSelected(undefined)
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }


  const getSurveyInfo = async ()=>{
    try {
      const {data} = await axiosBack.get('/surveys/'+selected);
      
     setValores(data)
     
      
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }
  
  useEffect(()=>{
    getSurveyInfo();
  },[])

  const {handleChange, handleSubmit,validated} = useForm(editSurvey,valores, setValores,onClose,goToAdmin);

  
  return ( 
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idEncuesta">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text"  onChange={handleChange} value={valores.id} name='id'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="NombreEncuesta">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control required type="text"  onChange={handleChange} value={valores.name} name='name'  maxLength={25} minLength={4}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="CategoriaEncuesta">
        <Form.Label>Categoría</Form.Label>
        <Form.Select onChange={handleChange} value={valores.categoria} name="categoria">
          {
            categorias.map(item => 
            {
              if(item.state=="Disponible"){
                return  <option key={item.id} >{item.name}</option>
              }
            })
          }
    
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="EstadoEncuesta">    
        <Form.Label>Estado</Form.Label>
        <Form.Select onChange={handleChange} value={valores.estado} name="estado">
        <option>Activa</option>
        <option>Inactiva</option>
        <option>Pendiente</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="RespuestasPorPersonaEncuesta">    
        <Form.Label>Una Respuesta Por Persona</Form.Label>
        <Form.Select onChange={handleChange} value={valores.unaRespuestaPorPersona} name="unaRespuestaPorPersona">
        <option>Activado</option>
        <option>Desactivado</option>
        </Form.Select>
        </Form.Group>
      <Button variant="success" type="submit">
        Editar
      </Button>
    </Form>
  );
}
 
export default EditSurveyForm;