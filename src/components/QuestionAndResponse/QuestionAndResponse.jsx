import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ADD_QUESTION_VALUES } from "../../constants";
import { SurveysContext } from "../../context/addSurveyContext";
import {Button} from "@nextui-org/react";

const QuestionAndResponse = ({itemQuestion,values,setValues,indice,onClose,setSelectedQuestion}) => {
 const {questionsA,setQuestionsA, setFlagQuestion} = useContext(SurveysContext)
 const [checkSelect,setCheckSelect] = useState('')

  const [state, setState] = useState("");
  const [question, setQuestion] = useState(ADD_QUESTION_VALUES);
  const [textField, setTextField] = useState("");
  const [responses, setResponses] = useState([]);


  const addQuestions = () => {

    if (question.question && question.typeQuestion) {
      let arrayResponses = [];
      if (responses.length > 0) {
        arrayResponses = [...responses];
      }

      const field = {
        _id: `${nanoid()}`,
        question: question.question,
        typeQuestion: question.typeQuestion,
        responses: arrayResponses,
      };

      if (itemQuestion) {
        const obj = {
          _id: `${itemQuestion._id}`,
          question: question.question,
          typeQuestion: question.typeQuestion,
          responses: arrayResponses,
        };
        let aux = questionsA.filter((q) => q._id != itemQuestion._id);

        aux.push(obj);

        setQuestionsA(aux);
        setResponses([]);

        toast.info("pregunta editada");
      
          onClose()
          setSelectedQuestion(undefined)
      } else {
        setFlagQuestion(true)
        setQuestionsA([...questionsA,field])

      setResponses([]);
      if(onClose!=null){
        onClose()
      }
       
        toast.info("pregunta agregada");
      }
      question.question="";
    } else toast.error("debe completar los campos");
  };

  const removeQuestions=(e)=>{
  if(itemQuestion){
    
    let aux = values.pregunta.filter(q=>q._id != e.target.id)
    let {pregunta, ...res} = values;
    res.pregunta = aux

    setQuestionsA(aux)
    setValues(res)
    
  }else{
    let aux = values.pregunta.filter(q=>q._id != e.target.id)
    let {pregunta, ...res} = values;
    res.pregunta = aux
    setValues(res)
    setQuestionsA(aux)
  
  }
  }

  const addFieldOption = (response,e) => {
    e.preventDefault()
    setResponses([...responses, response]);
    setTextField("");


  };

  const isSelected = (e) => {
    
    if(itemQuestion){
      setResponses([])
      setCheckSelect(e.target.value)
    }else setResponses([])
    
    setState(e.target.value);
    handleChangeQuestion(e);
  };

  const handleChangeQuestion = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if(values){
      setQuestionsA(values.pregunta)
  
    }
    if(itemQuestion){
    setQuestion(itemQuestion)
    setResponses(itemQuestion.responses)

      if(itemQuestion.typeQuestion=="texto"){
          setCheckSelect("texto")
          setState("texto")
      }else if(itemQuestion.typeQuestion=="opción múltiple"){
          setCheckSelect("opción múltiple")
          setState("opción múltiple")
      }else {
          setCheckSelect("casillas de verificación")
          setState("casillas de verificación")
      }
      
    }
  },[]);
  
  return (
    <>
    
          <div>
            
        <Form.Group >
          <Form.Label>Pregunta</Form.Label>

          <Form.Control
            type="text"
            placeholder="Escriba una pregunta"
            onChange={handleChangeQuestion}
            value={question.question}
            name="question"
            maxLength={65}
          />
          <Form.Label>Seleccione el tipo de respuesta</Form.Label>
          <Form.Check
            onChange={isSelected}
            type="radio"
            id="1"
            name="typeQuestion"
            label="texto"
            value="texto"
            required
            checked={itemQuestion && checkSelect=="texto"}
          />
          <Form.Check
            onChange={isSelected}
            type="radio"
            id="2"
            name="typeQuestion"
            label="opción múltiple"
            value="opción múltiple"
            required
            checked={itemQuestion && checkSelect=="opción múltiple"}
          />
          <Form.Check
            onChange={isSelected}
            type="radio"
            id="3"
            name="typeQuestion"
            label="casillas de verificación"
            value="casillas de verificación"
            required
            checked={itemQuestion && checkSelect=="casillas de verificación"}
          />
          {state == "opción múltiple" ? (
            <div className="my-4 flex flex-col space-y-2">
              <select className="px-5 shadow-sm h-10 rounded-md block w-full">
                {responses.map((item) => (
                  <option key={nanoid()} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <div className="flex space-between">
                <input
                  type="text"
                  onChange={(e) => setTextField(e.target.value)}
                  value={textField}
                  className="flex-1"
                  maxLength={30}
                />
                <button
                  className="btn btn-success ms-2"
                  onClick={(e) => addFieldOption(textField,e)}
                >
                  +
                </button>
                {
                  responses.length>0 && <button className="btn btn-danger ms-2" onClick={()=>setResponses([])}>limpiar</button>
                }
              </div>
            </div>
          ) : state == "casillas de verificación" ? (
            <div>
            <div>
              {
              responses.map((item)=>(
                  <label key={nanoid()}><input type="checkbox" id="cbox1" value={item}/> {item}</label>
              ))
              }
              </div>
              <div>
            <input type="text" onChange={(e) => setTextField(e.target.value)} value={textField} maxLength={30}/>
            <button className="btn btn-success ms-2" onClick={(e) => addFieldOption(textField,e)}>+</button>
            {
              responses.length>0 && <button className="btn btn-danger ms-2" onClick={()=>setResponses([])}>limpiar</button>
            }
            <br />
            </div>
            </div>
          ) : (
            <></>
          )}

          {
            indice && <> <Button className="m-3" onClick={(e)=>removeQuestions(e)} id={indice} > Quitar </Button>
            <br /> </>
          }
            
          <Button className="m-3" color="primary" auto flat onClick={addQuestions}> Añadir Pregunta</Button>
        </Form.Group>
        </div>
   
    </>
  );
};

export default QuestionAndResponse;
