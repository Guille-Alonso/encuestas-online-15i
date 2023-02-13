import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

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
            <header>
                <h1>

                    <Link to="/"> Logo </Link>
                </h1>

                

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


                
            </header>

        
        </>
    )


}

export default MainNavBar;





