import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import EncuestaLogo from "../../EncuestaLogo";
import { Layout } from "../../Layout/Layout";

const NavbarComponent = () => {
  return (
    <Layout>
      <Navbar
        css={{ backgroundColor: "#083045" }}
        isCompact
        isBordered
        variant="static"
        maxWidth
      >
        <Navbar.Brand >
          <EncuestaLogo />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Link isActive href="#">
            Register
          </Navbar.Link>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Encuestas</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Sign Up
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Admin
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default NavbarComponent;
