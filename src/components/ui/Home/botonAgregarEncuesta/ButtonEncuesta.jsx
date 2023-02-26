import React from "react";
import { Button, Grid } from "@nextui-org/react";

const ButtonEncuesta = () => {
  return (
    <Grid.Container justify="center">
       <Button color="white" auto ghost css={{zIndex: 0}}>
         Crear encuesta
        </Button>
    </Grid.Container>
  );
};

export default ButtonEncuesta;
