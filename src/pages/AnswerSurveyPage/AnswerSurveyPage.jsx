import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Button, Container, Form, FormLabel, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useGet from "../../hook/useGet"
import axios from "../../config/axios";
import useForm from "../../hook/useForm";

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
      await axios.put("/surveys/responses", obj);
    } catch (error) {
      toast.error("algo salió mal")
    }

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "guilloalonsot@gmail.com",
      Password :  import.meta.env.VITE_APP_ELASTIC_KEY,
      To : values.email,
      From : "guilloalonsot@gmail.com",
      Subject : `respuestas de la encuesta ${survey.survey.name}`,
      Body :  obj 
      }).then(() => toast.success("respuestas enviadas"));

    navigate('/home');
  };

  const { handleChange, handleSubmit, values } = useForm(initialState, submit);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Container>
         <Button onClick={goToSurveys}>Volver</Button>
        <h1>Encuesta: {survey.survey.name}</h1>
          <br />
          <h2>Categoría: {survey.survey.categoria?.name}</h2>
          <br />
          <h3>Preguntas:</h3>
        </Container>
  
          <Form onSubmit={handleSubmit}>
          {
            survey.survey.unaRespuestaPorPersona? 
         
            <FormLabel>Email obligatorio:<Form.Control type="text"
            onChange={handleChange}
            value={values.email}
            name="email" 
            required>
              </Form.Control></FormLabel>
            :
            <FormLabel>Email :<Form.Control type="text"
            onChange={handleChange}
            value={values.email}
            name="email">
              </Form.Control></FormLabel>
           
          }
            {survey.survey.pregunta?.map((item, index) => (
              <Container key={index}>
                <h3>{item.question}</h3>

                {/*item.typeQuestion == "casillas de verificación" ? (
                  item.responses.map((res, index) => (
                    <div key={index} className="d-flex ">
                      <Form.Check
                        checked={res}
                        type="checkbox"
                        onChange={handleChange}
                        id={item.id}
                        name={`response${index}`}
                      />
                      <Form.Label className="ms-2">{res}</Form.Label>
                    </div>
                  ))
                  ) :*/}
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
                    type="text"
                    onChange={handleChange}
                    id={item.id}
                    value={values[item._id]}
                    name={item._id}
                    required
                  />
                )}
              </Container>
            ))}
            <Container>
            <Button variant="success" className="mt-4" type="submit">Enviar Respuestas</Button>
            </Container>
            
          </Form>
        </>
      )}
    </>
  );
};

export default AnswerSurveyPage;
