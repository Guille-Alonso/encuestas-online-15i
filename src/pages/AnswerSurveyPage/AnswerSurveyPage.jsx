import { nanoid } from "nanoid";
// import useForm from "./../../hooks/useForm";
import { useEffect, useState } from "react";
import { Button, Container, Form, FormLabel, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import QuestionAndResponse from "../../components/QuestionAndResponse/QuestionAndResponse";

// import { ADD_RESPONSE, ADD_SURVEY_VALUES } from "../../constants";
import useGet from "../../hook/useGet"
import axios from "../../config/axios";
import useForm from "../../hook/useForm";
import { Input } from "@nextui-org/react";


const AnswerSurveyPage = () => {
  const params = useParams();
  // const [survey, loading, getSurveys, setSurvey] = useGet(
  //   "/surveys/" + params.surveyId,
  //   axios
  // );
  const [survey, setSurvey] = useState({})
  const [loading,setLoading] = useState(true)

  const getSurvey =async()=>{
    try {
      const {data} = await axios.get("/surveys/"+params.surveyId)
      setSurvey(data.survey)
      setLoading(false)
    } catch (error) {
      toast.error("error")
    }
  }

  useEffect(()=>{
getSurvey()
  },[])
 
  // const surveyData = survey.survey
  let initialState = {};
  survey?.pregunta?.forEach((p, index) => {
    // if(p.typeQuestion == "casillas de verificación"){
    //   let aux = []
    //   p?.responses?.forEach((r,index)=>{
    //     let obj = {"id":index,"valor":r}
    //     aux.push(obj)
    //   })
    //   initialState[p.id] = aux;
    // }else{
      initialState[p.id] = "";
    
  
  });
  
  const submit = async () => {
    let auxArr = {...survey}
    let hol = []
    hol.push(values)
    auxArr.respuesta = hol
 
    try {
      await axios.put("/surveys/"+2312334, auxArr);
    } catch (error) {
      toast.error("hubo un error")
    }
 

    //back
    // const encuestaAModificar = await Survey.findById(id);
    // await Survey.findByIdAndUpdate(id, {
    //   respuestas: [...encuestaAModificar.respuestas, values],
    // });
  };

  const { handleChange, handleSubmit, values } = useForm(initialState, submit);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
        <Container>
          {
            survey.unaRespuestaPorPersona && 
            <Form>
            <FormLabel>Email obligatorio:<Form.Control></Form.Control></FormLabel>
            </Form>
          }
        <h1>Encuesta: {survey.name}</h1>
          <br />
          <h2>Categoría: {survey.categoria?.name}</h2>
          <br />
          <h3>Preguntas:</h3>
        </Container>
  
          <Form onSubmit={handleSubmit}>
            {survey.pregunta?.map((item, index) => (
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
                    name={item.id}
                    id={item.id}
                    onChange={handleChange}
                    value={values[item.id]}
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
                        id={item.id}
                        name={item.id}
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
                    value={values[item.id]}
                    name={item.id}
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
