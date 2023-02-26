import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"
import { Col, Container, Row} from "react-bootstrap";
import BackgroundLogin from "../../asset/Login/wallpaper 2.jpg";
import BackgroundLogin2 from "../../asset/Register/fondo.jpg";
import AnimacionLogo from "../../components/LoginForm/Animacionlogin";


const LoginPage= () => {

    return  (
      <>
          
      <Container fluid  >
        <Row >
        <Col sx={12} md={8}  className=" d-none d-sm-block layout "
         style={{
          backgroundImage: `url("${BackgroundLogin}")`,
          backgroundSize: 'cover',
          
        }}>
                </Col>
         <Col sx={12} md={4} className=" layout  d-flex justify-content-center  align-items-center " 
         style={{
          backgroundImage: `url("${BackgroundLogin2}")`,
          backgroundSize: 'cover',
          zIndex: '0',
          
        }}>
       <div className="Animacion" 
       style={{
       position: 'absolute',
       top: '0',
         }}>
            <AnimacionLogo ></AnimacionLogo>
        </div>
          <div style={{
       position: 'relative',
       
         }}><LoginForm /></div>
         </Col>
                
        </Row>
 </Container>
      </>
      
    )
  }

  export default LoginPage ;