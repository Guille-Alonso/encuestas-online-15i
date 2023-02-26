import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState } from 'react';
import "../Login/LoginPage.css"
import { Col, Container, Image, Row} from "react-bootstrap";
<<<<<<< HEAD
import "../../Assets/ImagesLogin/wallpaper 3.jpg";
=======
import "../../asset/Login/wallpaper 3.jpg";
>>>>>>> e7c43f68bb44aa48000ac2511216672b63e7055f


const LoginPage= () => {

    return  (
      <>
          
      <Container fluid  >
        <Row >
        <Col sx={12} md={8}className=" d-none d-sm-block layout bg-primary" >
         </Col>
         <Col sx={12} md={4} className=" layout bg-success d-flex justify-content-center pt-5  align-items-center" >
         {/* <Image src= "../../Assets/ImagesLogin/Logo.png"/> */}
          <LoginForm/>
         </Col>
                
        </Row>
 </Container>
      </>
      
    )
  }

<<<<<<< HEAD
  export default LoginPage ;
=======
  export default LoginPage ;
>>>>>>> e7c43f68bb44aa48000ac2511216672b63e7055f
