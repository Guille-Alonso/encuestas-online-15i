import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import styled from 'styled-components';
import ReactPlayer from 'react-player';
import videoEncuestas from "../../asset/ForgetPassword/videoEncuestas.mp4";
import { Col, Container, Row} from "react-bootstrap";

import ForgetPasswordForm from '../../components/ForgetPassword/ForgetPasswordForm';
import "../Login/forgetpassword.css";
import fondo from "../../asset/Register/fondo.jpg";


const ForgetPassword= () => {

      
  return (
    <>
    <Container fluid style={
      {
        width:'100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url("${fondo}")`,
        backgroundSize: 'cover',
        alignItems: 'center',
        
      }
    }>
          
       
        <ReactPlayer 
    className= "react-player"
    url={videoEncuestas}playing loop 
    width='50%'
    height='50%'
    
    
        
  ></ReactPlayer>
         
   
  <ForgetPasswordForm/>
  
    </Container>
  </>
  );
}
  
export default ForgetPassword;