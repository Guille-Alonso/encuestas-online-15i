import React from "react";
import { Card, Grid, Text, Button, Row, Container } from "@nextui-org/react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/Styles/homePage.css";
import NavbarComponent from "../components/common/Navbar/NavbarComponent";
import FooterComponent from "../components/common/Footer/FooterComponent";
import { Layout } from "../components/Layout/Layout";
import ButtonEncuesta from "../components/ui/Home/botonAgregarEncuesta/ButtonEncuesta";

const HomePage = () => {
  return (
    <div className="layout">
      <NavbarComponent></NavbarComponent>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;
