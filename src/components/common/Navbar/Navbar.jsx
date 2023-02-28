import { Navbar, Button, Text } from "@nextui-org/react";
import { Container, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import EncuestaLogo from "../../EncuestaLogo";

import { UserIcon } from "../Navbar/UserIcon/UserIcon";

const NavBar = () => {

  const collapseItems = ["Registrarse", "Pagina Principal", "Encuestas" , "Ingresar" , "Administración"];
 

    return (  <Navbar
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
          <Navbar.Link><Link to='/login'>Ingresar </Link></Navbar.Link>
          <Navbar.Link> <Link to='/register'>Registrarse </Link> </Navbar.Link>
          <Navbar.Link > <Link to='/home'>Encuestas</Link>  </Navbar.Link>
          </div>

            
       
          <Button
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
        </Navbar.Content>

        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              
            >
              <Link
                css={{
                  minWidth: "100%",
                  color: "#073044"
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
          
      </Navbar> );
}
 
export default NavBar;