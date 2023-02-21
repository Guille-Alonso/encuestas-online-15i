import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MainNavBar = () =>{


    const {state} = useLocation()
    const navigate = useNavigate()

    console.log(state);

    const onLogout = () => {

        navigate("/Login", {
            replace: true,
        })


    }
    const { pathname } = useLocation();

    return (
        
            <Navbar className="Navbar" variant="dark">
            <Container className="mw-100 w-100 d-flex justify-content-between m-0">

            {pathname === '/login'?(
            
            <Navbar.Brand className="brand-logo">
            <img className="mh-100 mw-100 d-block" alt="Logo" /> 
            <button className='btn-logOut ' onClick={onLogout}>Cerrar Sesiòn</button>
            </Navbar.Brand>

) : (
    <> 
            <Navbar.Collapse className="justify-content-end">

                    <div className='user'>
                    <span className='username'>{state?.name}</span>
                   
                </div>
                                          
                    <nav className=''>
                    <Link to="/Login" className= "nav-link primary-button btn d-flex align-items-center">Iniciar Sesiòn</Link>
                    <Link to="/register"className= "nav-link primary-button btn d-flex align-items-center">Registrarse</Link>
                </nav>
                 
                    </Navbar.Collapse>
                    </>
                    )}
                </Container>
            </Navbar>
            
       
    )
}

export default MainNavBar;



