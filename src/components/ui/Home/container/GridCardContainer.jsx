import React, { useEffect, useState } from "react";
import { Container } from "@nextui-org/react";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import CardEncuesta from "../card/CardEncuesta";
import axios from "../../../../config/axios";
import useGet from "../../../../hook/useGet";
import { Spinner } from "react-bootstrap";
import { nanoid } from "nanoid";


 

const GridCardContainer = ({filter}) => {
  const [survey, loading] = useGet(
    "/surveys",
    axios
  );

  return (
    <Grid.Container>
      {loading ? (
        <Spinner />
      ) : (
        survey.map((card) => {
          if (card.estado == "activa" && card.categoria.name==filter || card.estado == "activa" && filter ==undefined || card.estado == "activa" && filter =='') {
            return (
              <Grid
              className="d-flex mb-3"
                key={nanoid()}
                xs={12}
                sm={6}
                md={4}
                justify="center"
                css={{ marginBottom: 5 }}
              >
                <CardEncuesta
                  key={card._id}
                  descripcion={card.name}
                  titulo={card.categoria?.name}
                  id={card._id}
                ></CardEncuesta>
              </Grid>
            );
          }
        })
      )}
    </Grid.Container>
  );
};

export default GridCardContainer;
