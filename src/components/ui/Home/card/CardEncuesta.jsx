import React from "react";
import { Card, Text, Button, Row } from "@nextui-org/react";

const CardEncuesta = ({ titulo, descripcion, id }) => {
  return (
    <Card css={{ mw: "330px" , backgroundColor: "#073044" , opacity:"0.8"}}>
      <Card.Header>
        <Text css={{color:"White"}}>{titulo}</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" , textAlign: "center" }}>
        <Text css={{color:"white"}} >{descripcion}</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="center">
        <Button
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
