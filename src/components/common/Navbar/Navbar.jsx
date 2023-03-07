import { Navbar, Button, Text } from "@nextui-org/react";
import { Container, Nav, Spinner } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EncuestaLogo from "../../EncuestaLogo";
import { UserIcon } from "./UserIcon/UserIcon";
import { SurveysContext } from "../../../context/addSurveyContext";
import "../Navbar/Navbar.css";



const NavBar = () => {
  const { authenticated, setAuthenticated, loading, user, getAuth } =
    useContext(SurveysContext);

  const items = [
    { key: 1, path: "/login", name: "Ingresar" },
    { key: 2, path: "/register", name: "Registrarse" },
    { key: 3, path: "/admin", name: "Administración" },
    { key: 4, path: "/home", name: "Encuestas" },
    { key: 5, path: "/home", name: "Cerrar Sesión" },
  ];

  const navigate = useNavigate();

  const goToAddress = (address) => {
    navigate(address);
  };

  const setOut = () => {
  localStorage.removeItem("token")
  setAuthenticated(false);  
 
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Navbar
      isBordered
      variant="sticky"
      css={{
        backgroundColor: "#073044",
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
        $$navbarBlur: "none",
      }}
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <EncuestaLogo />
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="warning"
        hideIn="xs"
        variant="highlight"
      >
        <div className="d-flex mt-4">
          {!authenticated && (
            <>
              <Navbar.Link>
                <Link to="/login">Ingresar </Link>
              </Navbar.Link>
              <Navbar.Link>
                
                <Link to="/register">Registrarse </Link>
              </Navbar.Link>
            </>
          )}

          <Navbar.Link>
            
            <Link to="/home">Encuestas</Link>
          
          </Navbar.Link>
          {authenticated && (
            <Navbar.Link>
              
              <Link  onClick={setOut}>Cerrar Sesión</Link>
            </Navbar.Link>
          )}
        </div>

        {loading ? (
          <Spinner />
        ) : (
          (authenticated &&
          user.admin) && (
            <Button
              onClick={() => goToAddress("/admin")}
              icon={<UserIcon />}
              shadow
              color="primary"
              auto
              flat
              as={Link}
              href="#"
            >
              Administración
            </Button>
          )
        )}
      </Navbar.Content>

      <Navbar.Collapse disableAnimation>
        {items.map((item, index) => (
          <Navbar.CollapseItem
            key={index}
            css={{
              color: index === items.length - 1 ? "$error" : "",
            }}
          >
            {item.name == "Ingresar" && !authenticated ? (
              <Link
                css={{
                  minWidth: "100%",
                  color: "#073044",
                }}
                to={item.path}
              >
                {item.name}
              </Link>
            ) : item.name == "Registrarse" && !authenticated ? (
              <Link
                css={{
                  minWidth: "100%",
                  color: "#073044",
                }}
                to={item.path}
              >
                {item.name}
              </Link>
            ) : item.name == "Cerrar Sesión" && authenticated ? (
              <Link
                onClick={setOut}
                css={{
                  minWidth: "100%",
                  color: "#073044",
                }}
                to={item.path}
              >
                {item.name}
              </Link>
            ) : item.name == "Administración" && authenticated && user.admin ? (
              <Link
                css={{
                  minWidth: "100%",
                  color: "#073044",
                }}
                to={item.path}
              >
                {item.name}
              </Link>
            ) : item.name == "Encuestas" ? (
              <Link
                css={{
                  minWidth: "100%",
                  color: "#073044",
                }}
                to={item.path}
              >
                {item.name}
              </Link>
            ) : (
              <></>
            )}
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
 
export default NavBar;