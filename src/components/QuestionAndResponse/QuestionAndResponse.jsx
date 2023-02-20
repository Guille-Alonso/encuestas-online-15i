import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuestionAndResponse = ({handleChange,values}) => {
    

    const [state,setState] = useState('')
  

const isSelected = (e)=>{
setState(e.target.value)
}

    return (
      <Form.Group className="mb-3" controlId="PreguntasYRespuestas">
        <Form.Label>Pregunta</Form.Label>
        <Form.Control type="text" required placeholder="Escriba una pregunta" onChange={handleChange} value={values.pregunta} name='pregunta'/>
        <Form.Label>Seleccione el tipo de respuesta</Form.Label>
        <Form.Check
        onChange={isSelected}
          type="radio"
          id="1"
          name="tipoDeRespuesta"
          label="texto"
          value="texto"
          required
        />
        <Form.Check
         onChange={isSelected}
          type="radio"
          id="2"
          name="tipoDeRespuesta"
          label="opción múltiple"
          value="opción múltiple"
          required
        />
             <Form.Check
         onChange={isSelected}
         type="radio"
         id="3"
         name="tipoDeRespuesta"
         label="casillas de verificación"
         value="casillas de verificación"
         required
       />
       {/* {

        state == "opción múltiple"?
        <h1>ede</h1>
        :
        state == "casillas de verificación"?
        <h1>no</h1>
        :
        <></>
       } */}
    
      </Form.Group>
    );
}
 
export default QuestionAndResponse;