import React from "react";
import { Card, Text, Button, Row } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

const CardEncuesta = ({ titulo, descripcion, id }) => {
  const navigate = useNavigate()
  const goToSurvey=()=>{
    navigate(`/answerSurvey/${id}`)
  }
  return (
    <Card css={{ mw: "330px" , backgroundColor: "#073044" , opacity:"0.8"}}>
      <Card.Header className="d-flex justify-content-center">
      <div className="d-flex justify-content-center">
          <img
            className="d-inline-block  justify-align-center"
            src="../../../src/Image/encuesta.png"
            width="75"
            height="75"
            alt=""
          />
        </div>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" , textAlign: "center" }}>
      <Text css={{color:"white"}} >{descripcion.toUpperCase()}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="center">

         <Button
       onClick={goToSurvey}
              shadow
              color="primary"
              auto
              flat
              href="#"
            >
             
              Ver más
           
            </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardEncuesta;
