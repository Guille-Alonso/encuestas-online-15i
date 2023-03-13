import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/Styles/landingPage.css"
import { Button } from "@nextui-org/react";

const LandingPage = () => {

    const navigate = useNavigate()

    const goToRegister = ()=>{
        navigate('/register')
    }

    return (
      <div className="landingHeight">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <h1 className="text-center">
              ¿Qué estás esperando?
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button
                className="mt-4"
                onClick={goToRegister}
                color="success"
                flat
                ghost
                shadow
                css={{ zIndex: 0 }}
              >
                Comenzar
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default LandingPage;