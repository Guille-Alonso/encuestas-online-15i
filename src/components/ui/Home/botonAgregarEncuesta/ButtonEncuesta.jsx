import React from "react";
import { Button, Grid } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

const ButtonEncuesta = () => {
  const navigate = useNavigate()
  const goToAddSurvey=()=>{
    navigate('/addSurveyUser')
  }
  return (
    <Grid.Container justify="center">
       <Button onClick={goToAddSurvey} color="white" auto ghost css={{zIndex: 0}}>
        Crear encuesta
        </Button>
    </Grid.Container>
  );
};

export default ButtonEncuesta;
