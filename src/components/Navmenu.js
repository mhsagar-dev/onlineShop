import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Navmenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">KhabarDaw</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/dashboard"}>Dashboard</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link>
            <Badge badgeContent={99} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
            </Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navmenu;


