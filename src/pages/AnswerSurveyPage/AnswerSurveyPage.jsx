import { nanoid } from "nanoid";
import useForm from "./../../hooks/useForm";
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
  const [survey, loading, getSurveys, setSurvey] = useGet(
    "/surveys/" + params.surveyId,
    axiosBack
  );
  let initialState = {};
  survey?.pregunta?.forEach((p, index) => {
    initialState[p.id] = "";
  });
  const submit = async () => {
    await axiosBack.put("/answerSurvey/687843534", values);
    //back
    const encuestaAModificar = await Survey.findById(id);
    await Survey.findByIdAndUpdate(id, {
      respuestas: [...encuestaAModificar.respuestas, values],
    });
  };

  const { handleChange, handleSubmit, values } = useForm(initialState, submit);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>{survey.name}</h1>
          <br />
          <h2>{survey.categoria.name}</h2>
          <Form onSubmit={handleSubmit}>
            {survey.pregunta.map((item, index) => (
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
                  >
                    {item.responses.map((res) => (
                      <option key={nanoid()} value={res}>
                        {res}
                      </option>
                    ))}
                  </Form.Select>
                ) : (
                  <Form.Control
                    key={index}
                    type="text"
                    onChange={handleChange}
                    id={item.id}
                    value={values[item.id]}
                    name={item.id}
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
};

export default AnswerSurveyPage;
