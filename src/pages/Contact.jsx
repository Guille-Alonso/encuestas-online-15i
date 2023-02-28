import React from "react";
import "../components/AboutUs/About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Input, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function Contact() {
      return (
        <div className="contact">
    <h1 className="text-center">Contacto</h1>
    <p className="text-center">¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos directamente. Nuestro equipo le responderá dentro de
        Cuestión de horas para ayudarte.</p>
        <Grid.Container className="text-center justify-content-center" gap={3} md={12}>
          <Grid>
          <Input 
          bordered 
          labelPlaceholder="Nombre" 
          color="white" 
          type="text"/>
          </Grid>
          <Grid>
          <Input 
          bordered 
          labelPlaceholder="Apellido" 
          color="black" 
          type="text"/>
          </Grid>
          <Grid>
          <Input 
          bordered 
          labelPlaceholder="Correo Electronico" 
          color="white" 
          type="mail"/>
            <Grid/>
          </Grid>
          <Grid>
          <Input 
          bordered 
          labelPlaceholder="Celular" 
          color="white" 
          type=""/>
          </Grid>
          <Grid>
            <Input 
            size="xl"
              bordered 
              labelPlaceholder="Escriba aqui su consulta" 
              color="white" 
              type="text"/>
          </Grid>
        </Grid.Container>
          <Row justify="center">
        <Button 
              shadow
              color="primary"
              
              flat
              href="#"
              >
                Enviar
            </Button>
                </Row>
            
            </div>
      );
    }
    


export default Contact;
