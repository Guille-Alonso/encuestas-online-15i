import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const MainNavBar = () =>{


    const {state} = useLocation()
    const navigate = useNavigate()

    console.log(state);

    const onLogout = () => {

        navigate("/Login", {
            replace: true,
        })


    }

    return (
        <>
            <Navbar className="Navbar" variant="dark">
                
            <Container className="mw-100 w-100 d-flex justify-content-between m-0">
            <Navbar.Brand className="brand-logo">
            <img className="mh-100 mw-100 d-block" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">

                {state?.logged ? (
                    <div className='user'>
                    <span className='username'>{state?.name}</span>
                    <button className='btn-logOut' onClick={onLogout}>Cerrar Sesiòn</button>
                </div>

                    ) : (
                    <nav>
                    <Link to="/Login">Iniciar Sesiòn</Link>
                    <Link to="/register">Registrarse</Link>
                </nav>
                    )
                }

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
        </>
    )


}

export default MainNavBar;






