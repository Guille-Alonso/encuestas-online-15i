import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Container, Form, FormLabel, Spinner,Row,Col, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useGet from "../../hook/useGet"
import axios from "../../config/axios";
import useForm from "../../hook/useForm";
import "../../components/Styles/responsivesPages.css"
import {Button} from "@nextui-org/react";

const AnswerSurveyPage = () => {
  const params = useParams();
  const [survey, loading] = useGet("/surveys/"+params.surveyId,axios);

  const navigate = useNavigate()
 
  const goToSurveys = ()=>{
    navigate("/home")
  }
 
  let initialState = {
    "email":''
  };
  
  survey.survey?.pregunta?.forEach((p, index) => {
     
      initialState[p._id] = "";
    
    
  });
  
  const submit = async () => {

    const obj = {
      "id":survey.survey._id,
      "valores":values
    }
  
    try {
    const {data} = await axios.put("/surveys/responses", obj);

    let preguntasYrespuestas = [];
     for (let index = 0; index < data.encuestaModificada.pregunta.length; index++) {
      
        let objPreguntasYRespuestas={
          "pregunta":data.encuestaModificada.pregunta[index].question,
          "respuesta":values[data.encuestaModificada.pregunta[index]._id]
        }
        preguntasYrespuestas.push(objPreguntasYRespuestas)
     }

     let responsesEmail = []
    for (let index = 0; index < preguntasYrespuestas.length; index++) {
    responsesEmail.push(`<h3>${preguntasYrespuestas[index].pregunta}</h3><label>${preguntasYrespuestas[index].respuesta}</label> <br/>`)
     }
   
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "guilloalonsot@gmail.com",
        Password :  import.meta.env.VITE_APP_ELASTIC_KEY,
        To : values.email,
        From : "guilloalonsot@gmail.com",
        Subject : `respuestas de la encuesta ${survey.survey.name}`,
        Body :  `<h1>${data.encuestaModificada.name}</h1> <br/>
        ${responsesEmail}
        `
        }).then(() => toast.success("respuestas enviadas"));
  
      navigate('/home');
    } catch (error) {
      toast.error(error.response?.data.message || error.message)
     
    }
  };

  const { handleChange, handleSubmit, values } = useForm(initialState, submit);
  return (
    <div className="adminHeight">
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Container>
         <Button className="d-flex my-3" css={{zIndex: 0}} shadow color="primary" auto flat onClick={goToSurveys}>Volver</Button>
        <h1>Encuesta: {survey.survey.name}</h1>
          <br />
          <h2>Categoría: {survey.survey.categoria?.name}</h2>
        </Container>
  
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row>
                <Col xs={6}>
         
          {
            survey.survey.unaRespuestaPorPersona? 
         
            <FormLabel>Email obligatorio:<Form.Control type="email"
            onChange={handleChange}
            value={values.email}
            name="email" 
            maxLength={40}
            required>
              </Form.Control></FormLabel>
            :
            <FormLabel>Email :<Form.Control type="email"
            onChange={handleChange}
            value={values.email}
            maxLength={40}
            name="email">
              </Form.Control></FormLabel>
           
          }
         
          <h2>Preguntas:</h2>
                 </Col>
              </Row>
            </Container>
            
            {survey.survey.pregunta?.map((item, index) => (
              <Container key={index}>
                <Row>
                  <Col xs={6}>
                <h4>{item.question}</h4>

                {item.typeQuestion == "opción múltiple" ? (
                  <Form.Select
                    name={item._id}
                    id={item._id}
                    onChange={handleChange}
                    value={values[item._id]}
                    required
                  >
                      <option value="">Elija una opción :</option>
                    {item.responses.map((res) => (
                      <option key={nanoid()} value={res}>
                        {res}
                      </option>
                    ))}
                  </Form.Select>
                ) : item.typeQuestion == "casillas de verificación" ? (
                  item.responses.map((res, index) => (
                    <div key={index} className="d-flex ">
                      <Form.Check
                        type="checkbox"
                        onChange={handleChange}
                        id={index + 1}
                        name={item._id}
                        value={res}
                      />
                      <Form.Label className="ms-2">{res}</Form.Label>
                    </div>
                  ))
                  ) :(
                   
                  <Form.Control
                    key={index}
                    as="textarea"
                    onChange={handleChange}
                    id={item.id}
                    value={values[item._id]}
                    name={item._id}
                    required
                    maxLength={80}
                  />
                )}
                </Col>
                </Row>
              </Container>
            ))}
            <Container>
            <Button color="success" auto flat className="my-3" css={{zIndex: 0}} type="submit">Enviar Respuestas</Button>
            </Container>
            
          </Form>
        </>
      )}
    </div>
  );
};

export default AnswerSurveyPage;
