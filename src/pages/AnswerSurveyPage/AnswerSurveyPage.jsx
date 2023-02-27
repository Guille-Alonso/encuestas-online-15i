import { nanoid } from "nanoid";
import { useForm } from "rc-field-form";
import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import QuestionAndResponse from "../../components/QuestionAndResponse/QuestionAndResponse";
import { axiosBack } from "../../config/axios";
import { ADD_RESPONSE, ADD_SURVEY_VALUES } from "../../constants";
import useGet from "../../hooks/useGet";

const AnswerSurveyPage = () => {
    const params = useParams();
    const [survey, loading, getSurveys,setSurvey] = useGet('/surveys/'+params.surveyId,axiosBack);
     // const {handleChange, handleSubmit,validated,values,setValues} = useForm();
    
     const [valuesCheck, setValuesCheck] = useState(ADD_RESPONSE);
     const [valuesText, setValuesText] = useState(ADD_RESPONSE);
     const [valuesSelect, setValuesSelect] = useState(ADD_RESPONSE);
     const [responses, setResponses]= useState([]);
     const [responsesSurvey, setResponsesSurvey]= useState([]);
     const [responsesAux,setResponsesAux] = useState([])
 
 
   const getResponsesSurvey = async ()=>{
     try {
       const {data} = await axiosBack.get("/surveys/" + 687843534);
       setResponsesAux(data.respuesta)
     } catch (error) {
       
     }
   }
 
     useEffect(()=>{
         if(!loading){
             getResponsesSurvey()
           
         }
     },[loading])
  
     const handleChange = (e)=>{
       
     let aux = []
  
       if(e.target.type=="checkbox"){
         if(e.target.checked){
       
           setResponses([...responses,e.target.value])
           // console.log(responses);
       
         }else if(!e.target.checked){
           const aux = responses.filter(r=>r !== e.target.value)
           setResponses(aux)
           // console.log(responses);
        
         }
         
         setValuesCheck({
           [e.target.name] : responses,
           question: e.target.id
         })
         // setResponsesSurvey([...responsesSurvey,valuesCheck])
        aux = responsesSurvey.filter(r=>r.question !== e.target.id)
       aux.push(valuesCheck)
       setResponsesSurvey(aux)
 
 
         // console.log(responsesSurvey);
       }else if(e.target.type=="text"){
       setValuesText({
         // ...values,
        
         [e.target.name] : e.target.value,
         question: e.target.id
       })
       // setResponsesSurvey([...responsesSurvey,valuesText])
        aux = responsesSurvey.filter(r=>r.question !== e.target.id)
       aux.push(valuesText)
       setResponsesSurvey(aux)
 
  
     }else{
       setValuesSelect({
         // ...values,
        
         [e.target.name] : e.target.value,
         question: e.target.id
       })
       aux = responsesSurvey.filter(r=>r.question !== e.target.id)
       aux.push(valuesSelect)
       setResponsesSurvey(aux)
 
 
     }
  console.log(responsesSurvey);
 
     }
 
     const sendResponses = async (e) => {
       e.preventDefault();
       const sendResponses = responsesSurvey.filter(r=> r.question !== '');
       console.log(sendResponses);
 
       const objectResponse = {
         user: "patri",
         responses: sendResponses,
       };
       
       setResponsesAux([...responsesAux,objectResponse])
       let auxAux = [...responsesAux]
       auxAux.push(objectResponse)
       const aux = {...survey}
       aux.respuesta = auxAux
       try {
         await axiosBack.put("/surveys/" + 2312334, aux);
       } catch (error) {
         toast.error("algo anduvo mal");
       }
     };
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1>{survey.name}</h1>
            <br />
            <h2>{survey.categoria.name}</h2>
            <Form onSubmit={sendResponses}>
              {survey.pregunta.map((item, index) => (
                <Container key={index}>
                  <h3>{item.question}</h3>

                  {item.typeQuestion == "casillas de verificación" ? (
                    item.responses.map((res, index) => (
                      <div key={index} className="d-flex ">
                        <Form.Check
                          value={res}
                          type="checkbox"
                          onClick={handleChange}
                          id={item.id}
                          name="response"
                        />
                        <Form.Label className="ms-2">{res}</Form.Label>
                      </div>
                    ))
                  ) : item.typeQuestion == "opción múltiple" ? (
                    <Form.Select
                      name="response"
                      id={item.id}
                      onChange={handleChange}
                      value={valuesSelect.response}
                    >
                      {item.responses.map((res) => (
                        <option key={nanoid()}>{res}</option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      key={index}
                      type="text"
                      onChange={handleChange}
                      id={item.id}
                      value={valuesText.response}
                      name="response"
                    />
                  )}
                </Container>
              ))}
              <Button type="submit">Enviar</Button>
            </Form>
          </>
        )}
      </>
    );
}
 
export default AnswerSurveyPage;