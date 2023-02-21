import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"
import { Col, Container, Row} from "react-bootstrap";
import "../../Assets/ImagesLogin/wallpaper 3.jpg";


const LoginPage= () => {

    return  (
      <>
          
      <Container fluid className="containersize" >
        <Row >
        <Col className="bg-primary" sx={2} md={8}>
         </Col>
         <Col className=" bg-success d-flex justify-content-center pt-5 " sx={2} md={4}><LoginForm/>
         </Col>
                
        </Row>
 </Container>
      </>
      
    )
  }

  export default LoginPage ;
