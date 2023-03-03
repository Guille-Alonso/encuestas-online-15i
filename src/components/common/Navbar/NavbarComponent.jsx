import React from "react";

import EncuestaLogo from "../../EncuestaLogo";

import { UserIcon } from "../Navbar/UserIcon/UserIcon";
import {  LayoutHome } from "../../LayoutHome/LayoutHome";

import NavBar from "./Navbar";
import  Content  from "../../Content";



const NavbarComponent = () => {
  return (
    <LayoutHome>
      <NavBar></NavBar>
      
    </LayoutHome>
     
    
  );
};

export default NavbarComponent;