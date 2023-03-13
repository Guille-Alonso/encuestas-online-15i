import React from "react";

import EncuestaLogo from "../../Surveys/EncuestaLogo";

import { UserIcon } from "../Navbar/UserIcon/UserIcon";
import {  LayoutHome } from "../../LayoutHome/LayoutHome";

import NavBar from "./Navbar";
import  Content  from "../../Surveys/Content";



const NavbarComponent = () => {
  return (
    <LayoutHome>
      <NavBar></NavBar>
      
    </LayoutHome>
     
    
  );
};

export default NavbarComponent;