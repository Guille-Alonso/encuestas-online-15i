import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import EncuestaLogo from "../../EncuestaLogo";
import { Layout } from "../../Layout/Layout";
import { UserIcon } from "../Navbar/UserIcon/UserIcon";

const collapseItems = ["Registrarse", "Pagina Principal", "Encuestas" , "Ingresar" , "Administración"];

const NavbarComponent = () => {
  return (
    <Layout>
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
          <Navbar.Link href="#">Registrarse</Navbar.Link>
          <Navbar.Link href="#">Pagina Principal</Navbar.Link>
          <Navbar.Link href="#">Encuestas</Navbar.Link>

          
          <Navbar.Link href="#">Ingresar</Navbar.Link>  
            
       
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
      </Navbar>
      {/* <Navbar isBordered variant="sticky"
        css={{
          backgroundColor: "#073044",
          $$navbarBackgroundColor: "transparent",
          $$navbarBlurBackgroundColor: "transparent",
          $$navbarBlur: "none", }}
       maxWidth
      >
        <NavbarToggle showIn="xs"/>
        <Navbar.Brand
        css={{"@xs":{
           w:"12%",
        },
      }}
        >
          <EncuestaLogo />
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight activeColor="primary"
        hideIn="xs"
        variant="highlight"
        >
          <Navbar.Link href="#">Registrarse</Navbar.Link>
          <Navbar.Link href="#">Pagina Principal</Navbar.Link>
          <Navbar.Link href="#">Encuestas</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
        css={{
          "@xs":{
            w: "12%",
            jc: "flex-end"
          },
        }}
        >
          <Navbar.Item>
          <Navbar.Link href="#">Ingresar</Navbar.Link>  
             </Navbar.Item>
          <Navbar.Item>
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
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index)  => (
            <Navbar.CollapseItem 
            key={item}
            activeColor="warking"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }} 
          isActive={index === 2}
          >
            <Link
            color="inherit"
            css={{
              minWidth: "100%"
            }}
            href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
          ))}
          </Navbar.Collapse>   
      </Navbar> */}
    </Layout>
  );
};

export default NavbarComponent;
