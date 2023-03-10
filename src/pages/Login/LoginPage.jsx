import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"
import { Col, Container, Row} from "react-bootstrap";
import BackgroundLogin from "../../asset/Login/wallpaper 2.jpg";
import BackgroundLogin2 from "../../asset/Register/fondo.jpg";
import AnimacionLogo from "../../components/LoginForm/Animacion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage= () => {

    return  (
      <>

      <Container fluid>
        <Row >
        <Col sm={12} md={7} lg={8} className=" columna1login"  
         style={{
          backgroundImage: `url("${BackgroundLogin}")`,
          backgroundSize: 'cover',
          overflow: "hidden",
          float: "left",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        
        }}>
        </Col>
         <Col  sm={12} md={5} lg={4} 
         style={{
          
          margin: '0',
          float:'left',
          display: 'flex',
          justifyContent: 'center',
          
                 
        }}>
       <div className="columna2login">
         <AnimacionLogo className="animacion" ></AnimacionLogo>
         <LoginForm /></div>

         </Col>

        </Row>

 </Container>
      </>

    )
  }

  export default LoginPage ;