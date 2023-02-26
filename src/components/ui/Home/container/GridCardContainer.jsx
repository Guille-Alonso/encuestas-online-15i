import React from "react";
import { Container } from "@nextui-org/react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import CardEncuesta from "../card/CardEncuesta";


 

const GridCardContainer = () => {
  const cards = [
    {
      id: 1,
      titulo: "Encuesta 1",
      descripcion: "encuesta dsadas",
    },
    {
      id: 2,
      titulo: "Encuesta 2",
      descripcion: "encuesta dsadas",
    },
    {
      id: 3,
      titulo: "Encuesta 3",
      descripcion: "encuesta dsadas",
    },
    {
      id: 4,
      titulo: "Encuesta 4",
      descripcion: "encuesta dsadas",
    },
    {
      id: 5,
      titulo: "Encuesta 5",
      descripcion: "encuesta dsadas",
    },
    {
      id: 6,
      titulo: "Encuesta 6",
      descripcion: "encuesta dsadas",
    },
    {
      id: 7,
      titulo: "Encuesta 7",
      descripcion: "encuesta dsadas",
    },{
      id: 8,
      titulo: "Encuesta 8",
      descripcion: "encuesta dsadas",
    },{
      id: 9,
      titulo: "Encuesta 9",
      descripcion: "encuesta dsadas",
    },
  ];

  return (

    <Grid.Container >
      {cards.map((card) => (
        <Grid xs={12} md={6} lg={4} justify='center' css={{marginBottom: 5}}>
          <CardEncuesta
            key={card.id}
            descripcion={card.descripcion}
            titulo={card.titulo}
            id={card.id}
          ></CardEncuesta>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default GridCardContainer;
