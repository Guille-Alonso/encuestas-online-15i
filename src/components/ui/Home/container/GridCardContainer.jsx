import React, { useEffect } from "react";
import { Container } from "@nextui-org/react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import CardEncuesta from "../card/CardEncuesta";
import axios from "../../../../config/axios";
import useGet from "../../../../hook/useGet";
import { Spinner } from "react-bootstrap";
import { nanoid } from "nanoid";


 

const GridCardContainer = () => {
  const [survey, loading] = useGet(
    "/surveys",
    axios
  );

  return (

    <Grid.Container >
      {
        loading?
        <Spinner/>
        :
        survey.map((card) => (
          <Grid key={nanoid()} xs={12} md={6} lg={4} justify='center' css={{marginBottom: 5}}>
            <CardEncuesta
              key={card._id}
              descripcion={card.name}
              titulo={card.categoria?.name}
              id={card._id}
            ></CardEncuesta >
          </Grid>
        ))
      }
      
    </Grid.Container>
  );
};

export default GridCardContainer;
