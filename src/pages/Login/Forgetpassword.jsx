import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import styled from 'styled-components';
import "../Login/Modal.css"
import videoEncuestas from "../../asset/ForgetPassword/videoEncuestas.mp4";
import { Col, Container, Row} from "react-bootstrap";
import BackgroundLogin2 from "../../asset/Register/fondo.jpg";
import ForgetPasswordForm from '../../components/ForgetPassword/ForgetPasswordForm';


const ForgetPassword= () => {

  return (
    <>
    <div className= "d-flex justify-content-center flex-column align-items-center" style={{
          backgroundImage: `url("${BackgroundLogin2}")`,
       
        }}>
        
   <ReactPlayer 
    className= "react-player"
    url={videoEncuestas}playing loop 
    width='40%'
    height='40%'
        
  ></ReactPlayer>
  <div><ForgetPasswordForm/></div>
    </div>
    
             </>
  );
}
  
export default ForgetPassword;