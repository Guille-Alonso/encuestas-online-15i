import React from "react";
import "../components/AboutUs/About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
return (
    <div className="about">
    <h1>About Us</h1>
    <p>Welcome</p>
    <br />
    <p>
        Somos 4 amigos y programadores apasionados por la tecnología, trabajamos juntos en un proyecto emocionante que pudiera ayudar a la gente a realizar encuestas. Así fue como surgió la idea de crear una página de encuestas.

    Rosario es una experta en diseño de interfaz de usuario. Ella se encargó  de crear una interfaz de usuario atractiva y fácil de usar para la  página de encuestas. Guillermo es un experto en back-end y se encargó de desarrollar el sistema que almacenaría las encuestas y las respuestas de los usuarios. Stella es una experta en front-end y se encargó de hacer que la interfaz de usuario de Rosario funcionara correctamente con el sistema de Guillermo. Nicolas es un experto en marketing y se encargó de promocionar la página de encuestas y atraer a usuarios.
    </p>
    <br />
    <p>
    Después de varias semanas de trabajo intenso, finalmente lanzamos la página de encuestas al público. La página ofrece una variedad de encuestas en diferentes categorías, como política, deportes, tecnología, entre otros temas.

    Somos un equipo de programadores que continuamos mejorando la página con nuevas características y herramientas, como la posibilidad de crear encuestas personalizadas y la opción de recibir análisis detallados de los resultados de la encuesta.

    Estamos muy orgullosos de nuestro trabajo y emocionados de ver cómo su página de encuestas estaba ayudando a la gente a tomar decisiones más informadas basadas en datos.
    </p>
    <br />

    <h3>Nuestros proyectos</h3>
    <br />
    <div className="videos py-3">
    <Container>
    <Row>
        <Col>
        <a href="https://github.com/Guille-Alonso">
        <img className="img" id="Guille-Alonso" src="src\asset\aboutUs\Guille alonso.jpeg" alt="Imagen de Guille" />
        </a>
        </Col>
        <Col>
        <a href="https://github.com/Rosario1105">
        <img className="img" id="Roro-pittaro" src="src\asset\aboutUs\Rosario Pittaro.jpeg" alt="Imagen de Rosario" />
        </a>
        </Col>
        
    </Row>
    <Row className="row m-2">
        <Col >
        <a href="">
        <img className="img" id="pick-nico" src="src\asset\aboutUs\Nicolas Pereira.jpeg" alt="Imagen de Nicolas" />
        </a>
        </Col>
        <Col>
        <a href="https://github.com/stellamaris8">
        <img className="img" id="Stella" src="src\asset\aboutUs\StellaAguero.jpeg" alt="Imagen de Stella" />
        </a>
        </Col>
    </Row>
    </Container>
    </div>
    </div>
);
}

export default About;