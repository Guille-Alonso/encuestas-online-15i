import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {

    
    return (
      <nav>
        <Link to="/">
        <img src="src\asset\Login\Logo .png" alt="Logo" />
      </Link>

      <ul>
        <li><Link to="/">Página Principal</Link></li>
        <li><Link to="/Encuestas">Encuestas</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
        <li><Link to="/Login">Ingresar</Link></li>
      </ul>
      </nav>
    );
  }
  
  export default Navbar;
  