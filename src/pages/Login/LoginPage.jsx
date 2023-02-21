import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"
import { Col, Container, Image, Row} from "react-bootstrap";
import "../../Assets/ImagesLogin/wallpaper 3.jpg";


const LoginPage= () => {

    return  (
      <>
          
      <Container fluid  >
        <Row >
        <Col sx={12} md={8}className=" d-none d-sm-block layout bg-primary" >
         </Col>
         <Col sx={12} md={4} className=" layout bg-success d-flex justify-content-center pt-5  align-items-center" >
         <Image src= "../../Assets/ImagesLogin/Logo.png"/>
          <LoginForm/>
         </Col>
                
        </Row>
 </Container>
      </>
      
    )
  }

  export default LoginPage ;
