import React from 'react';
import { Card, Grid, Text, Button, Row, Container } from "@nextui-org/react";
import ButtonEncuesta from "../components/ui/Home/botonAgregarEncuesta/ButtonEncuesta";
import GridCardContainer from "../components/ui/Home/container/GridCardContainer";
import 'bootstrap/dist/css/bootstrap.css'
import "../index.css"
import NavbarComponent from '../components/common/Navbar/NavbarComponent';


const HomePage = () => {
  return (
    <div className="layout">
      <NavbarComponent></NavbarComponent>
      <Container></Container>
      {/* Titulo */}
      <h1>Bienvenidos a la pagina principal de encuestas online</h1>
      <ButtonEncuesta></ButtonEncuesta>
      {/*boton agregar //container cards*/}
    </div>
  );
};

export default HomePage;
