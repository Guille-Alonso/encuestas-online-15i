import { Col, Container, Row } from "react-bootstrap";

const SurveyPage = ({modo}) => {
    return ( 
<Container>
    <Row>
        <Col>
        {modo}
        </Col>
    </Row>
</Container>

     );
}
 
export default SurveyPage;